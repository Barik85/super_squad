
import React, { Component, Fragment } from 'react';
import './App.css';
import HeroList from './components/HeroList';
import data from './initial_data';
import PanelWrapper from './components/PanelWrapper';
import Filter from './components/Filter';
import AddHeroForm from './components/AddHeroForm';
import SquadStatistic from './components/SquadStatistic';
import SquadList from './components/SquadList';
import SquadEditor from './components/SquadEditor';


class App extends Component {

  state = {
    heroes: [...data.heroes],
    squads: [...data.squads],
    filter: '',
    newSquad: [],
  }

  getVisibleHeroes = (items, atribute) => (
    items.filter((item) => item.name.includes(atribute))
  )

  addHero = (hero) => {
    this.setState(prevState => ({
      heroes: [hero, ...prevState.heroes]
    }))
  }

  deleteHero = id => {
    this.setState(prevState => ({
      heroes: prevState.heroes.filter((hero) =>(hero.id !== id))
    }))
  }

  handleFilterChange = (filter) => {
    this.setState({filter});
  }

  addToSquad = hero => {
    this.setState(prevState => ({
      newSquad: [hero, ...prevState.newSquad],
      // heroes: prevState.heroes.filter((prevHero) => (prevHero !== hero))
    }))
  }

  removeFromSquad = id => {
    // const removedHero = this.state.newSquad.filter((hero) => (hero.id === id));
    this.setState(prevState => ({
      newSquad: prevState.newSquad.filter((heroInSquad) => (heroInSquad.id !== id)),
      // heroes: [prevState.heroes, ...removedHero]
    }))
  }

  saveSquad = squad => {
    if (this.state.newSquad === []) return;

    this.setState(prevState => ({
      squads: [squad, ...prevState.squads]
    }))
  }

  resetSquad = () => {
    this.setState({
      newSquad: []
    })
  }

  render() {
    const {filter} = this.state;
    const {heroes} = this.state;
    const visibleHeroes = this.getVisibleHeroes(heroes, filter);
    const actionsForHero = {onDelete: this.deleteHero, onAdd:this.addToSquad};
    const actionsForSquadHero = {onDelete: this.removeFromSquad};
    const actionsForSquadEditor = {onSave: this.saveSquad, onReset: this.resetSquad}

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
            <SquadStatistic squad={this.state.newSquad}/>
            <HeroList heroes={this.state.newSquad} actions={actionsForSquadHero}/>
          </div>
          <div name="Save_squads">
            <h2>Save Squads</h2>
            <SquadList squads={this.state.squads}/>
          </div>
        </PanelWrapper>
      </Fragment>
    );
  }
}

export default App;
