import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {

  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  }

  state = {
    value: ''
  }

  handleInputChange = (e) => {
    const InputValue = e.target.value;
    this.setState({value: InputValue});
    this.props.onFilterChange(InputValue);
  }

  render() {
    const {filter} = this.props;

    return (
      <form>
        <input type="text" value={filter} onChange={this.handleInputChange}/>
      </form>
    );
  }
}
