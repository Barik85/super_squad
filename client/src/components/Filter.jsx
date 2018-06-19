import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './text_input/TextInput'

export default class Filter extends Component {

  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  state = {
    value: ''
  }

  handleInputChange = (inputValue) => {
    this.setState({value: inputValue});
    this.props.onFilterChange(inputValue);
  }

  render() {
    const {filter} = this.props;

    return (
      <form>
        <TextInput value={filter} onChange={this.handleInputChange} placeholder="find hero"/>
      </form>
    );
  }
}
