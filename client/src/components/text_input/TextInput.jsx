import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './TextInput.css';

export default class TextInput extends Component {

  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => {}
  }

  state = {
    text: this.props.value
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })

    if (this.props.onChange) this.props.onChange(value);
  }

  render() {
    return (
      <input className={style.text_input} name="text" onChange={this.handleInputChange} type="text" placeholder={this.props.placeholder}/>
    );
  }
}
