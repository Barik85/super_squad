import React, { Component, Fragment } from 'react';
import './App.css';
import HeroList from './components/HeroList';
// import data from './initial_data';
import PanelWrapper from './components/PanelWrapper';
import Filter from './components/Filter';
import AddHeroForm from './components/AddHeroForm';
import SquadStatistic from './components/SquadStatistic';
import SquadList from './components/SquadList';
import SquadEditor from './components/SquadEditor';
import * as utils from './components/utils/utils'


class App extends Component {

  state = {
    heroes: [],
    squads: [],
    filter: '',
    squadIds: []
  }

  componentDidMount() {
    fetch('/api/heroes', { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return [];
      })
      .then((incomingHeroes) => {
        this.setState({
          heroes: incomingHeroes
        })
      });

    fetch('/api/squads', { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return [];
      })
      .then((incomingSquads) => {
        this.setState({
          squads: incomingSquads
        })
      });
  }

  addHero = (hero) => {
    fetch('/api/heroes',
      {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    )
      .then(response => {
        if (response.status === 201) {
          return response.json();
        }
        return null;
      })
      .then(addedHero => {
        this.setState(prevState => ({
          heroes: [...prevState.heroes, addedHero]
        }))
      });
  }

  deleteHero = (id) => {

    const deleteUrl = `api/heroes/${id}`;
    const deleteData = { "id": `${id}` };
    fetch(deleteUrl,
      {
        method: 'DELETE',
        body: deleteData,
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }
    )
      .then(response => {
        if (response.status === 200) {
          this.setState(prevState => ({
            heroes: prevState.heroes.filter((hero) => (hero.id !== id))
          }))
        } else {
          alert('Ups! Something went wrong!');
        }
      })
      .catch(error => console.log(`Error: ${error}`))
  }

  handleFilterChange = (filter) => {
    this.setState({filter});
  }

  addToSquad = (id) => {
    this.setState(prevState => ({
      squadIds: [id, ...prevState.squadIds],
    }))
  }

  removeFromSquad = (id) => {
    this.setState(prevState => ({
      squadIds: prevState.squadIds.filter((insquadId) => (insquadId !== id)),
    }))
  }

  saveSquad = () => {
    if (this.state.squadIds.length === 0) return;

    const {heroes} = this.state;
    const {squadIds} = this.state;

    const newSquad = {
      heroes: utils.getHeroesInSquad(heroes, squadIds),
      stats: utils.getSquadStatistic(heroes, squadIds),
    }

    fetch('api/squads', {
      method: 'POST',
      body: JSON.stringify(newSquad),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }

        return null;
      })
      .then((addedSquad) => {
        this.setState(prevState => ({
          squads: [...prevState.squads, addedSquad],
          squadIds: []
        }))
      })
  }

  resetSquad = () => {
    this.setState({
      squadIds: []
    })
  }

  deleteSquad = (id) => {
    const deleteUrl = `api/squads/${id}`;
    const deleteData = {"id": `${id}`}

    fetch(deleteUrl, {
      method: 'DELETE',
      body: deleteData,
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState(prevState => ({
            squads: prevState.squads.filter((squad) => squad.id !== id)
          }))
        } else {
          alert('Ups! Something went wrong!');
        }
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  render() {
    const {filter} = this.state;
    const {heroes} = this.state;
    const {squadIds} = this.state;
    const visibleHeroes = utils.getAvailableHeroes(heroes, filter, squadIds);
    const actionsForHero = {onDelete: this.deleteHero, onAdd:this.addToSquad};
    const actionsForSquadHero = {onDelete: this.removeFromSquad};
    const actionsForSquadEditor = {onSave: this.saveSquad, onReset: this.resetSquad};
    const HeroesInSquad = utils.getHeroesInSquad(heroes, squadIds);
    const statistic = utils.getSquadStatistic(heroes, squadIds);

    return (
      <Fragment>
        <h1>Super Squad</h1>
        <PanelWrapper>
          <div name="Create_hero">
            <h2>Create Hero</h2>
            <AddHeroForm onFormSubmit={this.addHero}/>
          </div>
          <div name="Hero_list">
            <h2>Heroes</h2>
            <Filter onFilterChange={this.handleFilterChange} filter={filter}/>
            <HeroList heroes={visibleHeroes} actions={actionsForHero}/>
          </div>
          <div name="Squad_editor">
            <h2>Squad Editor</h2>
            <SquadEditor actions={actionsForSquadEditor}/>
            <SquadStatistic statistic={statistic}/>
            <HeroList heroes={HeroesInSquad} actions={actionsForSquadHero}/>
          </div>
          <div name="Saved squads">
            <h2>Saved Squads</h2>
            <SquadList squads={this.state.squads} onDelete={this.deleteSquad}/>
          </div>
        </PanelWrapper>
      </Fragment>
    );
  }
}

export default App;
