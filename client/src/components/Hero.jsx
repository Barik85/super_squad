import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({name, onAdd, onDelete, showInfo}) => (
  <div>
    <p>{name}</p>
    <button onClick={onAdd}>Add to squad</button>
    <button onClick={onDelete}>Delete forever</button>
    <button onClick={showInfo}>Info</button>
  </div>
);

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  showInfo: PropTypes.func.isRequired,
}

export default Hero;
