import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/lib/fa';
import Button from '../button/Button';
import styles from './Hero.css';


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
  <div className={styles.hero}>
    <p>{dataHero.name}</p>
    <div>
      {onAdd ? (
        <Button action={() => {onAdd(dataHero.id)}}>
          <FA.FaUserPlus/>
        </Button>
      ) : (
        ''
      )}
      {onDelete ? (
        <Button action={() => {onDelete(dataHero.id)}}>
          <FA.FaTrash/>
        </Button>
      ) : (
        ''
      )}
      <Button action={() => {showInfo()}}>
          <FA.FaInfoCircle/>
      </Button>
    </div>
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
