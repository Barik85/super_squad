import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/lib/fa';
import Button from './button/Button';
import inputStyle from './text_input/TextInput.css';
import geometry from './OuterGeometry.css';
import {makeOptions} from '../utils/utils';

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

    const {name, strength, intelligence, speed} = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <input
          className={inputStyle.text_input}
          type="text"
          name="name"
          value={name}
          placeholder="Hero name"
          onChange={this.handleInputChange}/>
        </div>
        <div>
          <select  className={inputStyle.text_input} name="strength" value={strength} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Strength </option>
            {makeOptions(10)}
          </select>
          <select  className={inputStyle.text_input} name="intelligence" value={intelligence} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Intelligence </option>
            {makeOptions(10)}
          </select>
          <select  className={inputStyle.text_input} name="speed" value={speed} onChange={this.handleInputNumberChange}>
            <option value="" disabled> Speed </option>
            {makeOptions(10)}
          </select>
        </div>
        <div className={geometry.m20auto}>
          <Button type="submit" layout="btn_filled" action={this.handleFormSubmit}>
            <FA.FaPlusCircle/>
            Add Hero
          </Button>
        </div>
      </form>
    );
  }
}
