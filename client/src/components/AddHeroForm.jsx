import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {v4} from 'uuid';

const INITIAL_STATE = {
  name: '',
  strength: '',
  intelligence: '',
  speed: ''
}

export default class AddHeroForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  }

  state = {...INITIAL_STATE}

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '') return;
    // const id = v4();
    const newHero = {...this.state};

    this.props.onFormSubmit(newHero);

    this.setState({ ...INITIAL_STATE});
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value});
  }

  handleInputNumberChange = e => {
    const name = e.target.name;
    const value = Number(e.target.value);

    this.setState({[name]: value});
  }

  render() {

    const {name} = this.state;
    const {strength} = this.state;
    const {intelligence} = this.state;
    const {speed} = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <input
          type="text"
          name="name"
          value={name}
          placeholder="Hero name"
          onChange={this.handleInputChange}/>
        </div>
        <div>
          <select name="strength" value={strength} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Strength </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
            <option value="9"> 9 </option>
            <option value="10"> 10 </option>
          </select>
          <select name="intelligence" value={intelligence} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Intelligence </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
            <option value="9"> 9 </option>
            <option value="10"> 10 </option>
          </select>
          <select name="speed" value={speed} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Speed </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
            <option value="9"> 9 </option>
            <option value="10"> 10 </option>
          </select>
        </div>
        <button type="submit">Add Hero</button>
      </form>
    );
  }
}
