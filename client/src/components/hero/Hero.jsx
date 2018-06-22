import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/lib/fa';
import Button from '../button/Button';
import styles from './Hero.css';


const Hero = ({id, name, strength, intelligence, speed, actions}) => {

  const showInfo = () => {
    console.log('[Hero info]');
    console.log('Name: ', name);
    console.log('Strength: ', strength);
    console.log('Intelligence: ', intelligence);
    console.log('Speed: ', speed);
  }

  const {onAdd, onDelete} = actions;

  return (
  <div className={styles.hero}>
    <p>{name}</p>
    <div className={styles.btns_box}>
      {onAdd && (
        <Button action={() => {onAdd(id)}}>
          <FA.FaUserPlus/>
        </Button>
      )}
      {onDelete && (
        <Button action={() => {onDelete(id)}}>
          <FA.FaTrash/>
        </Button>
      )}
      <Button action={() => {showInfo()}}>
          <FA.FaInfoCircle/>
      </Button>
    </div>
  </div>
)};

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  actions: PropTypes.shape()
}

Hero.defaultProps = {
  actions: {}
}

export default Hero;
