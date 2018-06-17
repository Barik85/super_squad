import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({dataHero, actions}) => {

  const showInfo = () => {
    console.log('[Hero info]');
    // for (const key in dataHero) {
    //   console.log(`${key}: ${dataHero[key]}`)
    // }
    console.log('Name: ', dataHero.name);
    console.log('Strength: ', dataHero.strength);
    console.log('Intelligence: ', dataHero.intelligence);
    console.log('Speed: ', dataHero.speed);
  }

  const {onAdd} = actions;
  const {onDelete} = actions;

  return (
  <div>
    <p>{dataHero.name}</p>
    {onAdd ? (
      <button onClick={() => {onAdd(dataHero.id)}}>Add to squad</button>
    ) : (
      ''
    )}
    {onDelete ? (
      <button onClick={() => {onDelete(dataHero.id)}}>Delete</button>
    ) : (
      ''
    )}
    <button onClick={showInfo}>Info</button>
  </div>
)};



// Hero.propTypes = {
//   dataHero: PropTypes.shape(
//     PropTypes.any
//   ),
//   actions: PropTypes.shape(
//     PropTypes.func
//   )
// }
Hero.propTypes = {
  dataHero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    strength: PropTypes.number,
    intelligence: PropTypes.number,
    speed: PropTypes.number
  }),
  actions: PropTypes.shape()
}

Hero.defaultProps = {
  dataHero: {},
  actions: {}
}

export default Hero;
