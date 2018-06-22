import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text_input/TextInput'

const Filter = ({filter, onFilterChange}) => {

  const handleInputChange = (inputValue) => {
    onFilterChange(inputValue);
  }

  return (
    <form>
      <TextInput value={filter} onChange={handleInputChange} placeholder="find hero" />
    </form>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Filter;
