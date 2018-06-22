import React, { Component, Fragment } from 'react';
import HeroList from './herolist/HeroList';
import PanelWrapper from './PanelWrapper';
import Filter from './Filter';
import AddHeroForm from './AddHeroForm';
import SquadStatistic from './SquadStatistic';
import SquadList from './SquadList';
import SquadEditor from './SquadEditor';
import * as utils from '../utils/utils';
import * as api from '../utils/api';
import titleStyle from './typography/titles.css';
import geometry from './OuterGeometry.css';
import Panel from './panel/Panel';
import Loader from './loader/Loader';

class App extends Component {
  state = {
    heroes: [],
    squads: [],
    filter: '',
    squadIds: [],
    error: null,
    isLoading: false
  };

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({isLoading: true});

    api.fetchAllHeroes()
      .then(incomingHeroes => {
        this.setState({
          heroes: incomingHeroes,
          isLoading: false
        })
      })
      .catch(err => this.setState({ error: err }));

    // eslint-disable-next-line
    this.setState({isLoading: true});
    fetch('/api/squads', { method: 'GET' })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        return { errors: { global: 'Eror while fetching' } };
      })
      .then(incomingSquads => {
        this.setState({
          squads: incomingSquads,
          isLoading: false
        });
      });
  }

  addHero = hero => {
    this.setState({isLoading: true});
    api.addHeroToDb(hero).then(addedHero => {
      this.setState(prevState => ({
        heroes: [...prevState.heroes, addedHero],
        isLoading: false
      }));
    });
  };

  deleteHero = id => {
    this.setState({isLoading: true});
    api.deleteHeroFromDB(id)
      .then(() => {
        this.setState(prevState => ({
          heroes: prevState.heroes.filter(hero => hero.id !== id),
          isLoading: false
        }));
      })
      .catch(error => console.log(`Error: ${error}`));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  addToSquad = id => {
    this.setState(prevState => ({
      squadIds: [id, ...prevState.squadIds],
    }));
  };

  removeFromSquad = id => {
    this.setState(prevState => ({
      squadIds: prevState.squadIds.filter(insquadId => insquadId !== id),
    }));
  };

  saveSquad = () => {
    if (this.state.squadIds.length === 0) return;

    const { heroes, squadIds } = this.state;

    const newSquad = {
      heroes: utils.getHeroesInSquad(heroes, squadIds),
      stats: utils.getSquadStatistic(heroes, squadIds),
    };

    this.setState({isLoading:true})
    api.addSquadToDB(newSquad).then(addedSquad => {
      this.setState(prevState => ({
        squads: [...prevState.squads, addedSquad],
        squadIds: [],
        isLoading: false
      }));
    });
  };

  resetSquad = () => {
    this.setState({
      squadIds: [],
    });
  };

  deleteSquad = id => {
    this.setState({isLoading:true})
    api.deletSquadFromDB(id)
      .then(() => {
          this.setState(prevState => ({
            squads: prevState.squads.filter(squad => squad.id !== id),
            isLoading: false
          }));
        }
      )
      .catch(error => console.log(`Error: ${error}`));
  };

  render() {
    const { filter, heroes, squadIds, isLoading } = this.state;
    const visibleHeroes = utils.getAvailableHeroes(heroes, filter, squadIds);
    const actionsForHero = {
      onDelete: this.deleteHero,
      onAdd: this.addToSquad,
    };
    const actionsForSquadHero = { onDelete: this.removeFromSquad };
    const actionsForSquadEditor = {
      onSave: this.saveSquad,
      onReset: this.resetSquad,
    };
    const heroesInSquad = utils.getHeroesInSquad(heroes, squadIds);
    const statistic = utils.getSquadStatistic(heroes, squadIds);
    const canSave = squadIds.length > 0;

    return (
      <Fragment>
        {isLoading && <Loader />}
        <h1 className={[titleStyle.heading1, geometry.mb20].join(' ')}>
          Super Squad
        </h1>
        <PanelWrapper>
          <Panel title="Create Hero">
            <AddHeroForm onFormSubmit={this.addHero} />
          </Panel>

          <Panel title="Heroes">
            <Filter onFilterChange={this.handleFilterChange} filter={filter} />
            <HeroList heroes={visibleHeroes} actions={actionsForHero} />
          </Panel>

          <Panel title="Squad Editor">
              <SquadEditor actions={actionsForSquadEditor} enableToSave={canSave} />
              <SquadStatistic statistic={statistic} />
              <HeroList heroes={heroesInSquad} actions={actionsForSquadHero} />
            </Panel>

          <Panel title="Saved squads">
            <SquadList squads={this.state.squads} onDelete={this.deleteSquad} />
          </Panel>
        </PanelWrapper>
      </Fragment>
    );
  }
}

export default App;
