import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/lib/fa';
import Button from '../button/Button';
import styles from './Squad.css';
import typografy from '../typography/titles.css';

const Squad = ({squad, onDelete}) => (
  <div className={styles.squad}>
    <div className={styles.heroes_wrapper}>
      <div>
        <h3 className={typografy.heading3}>Heroes</h3>
        <ul>
          {squad.heroes.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={typografy.heading3}>Stats</h3>
        <ul>
          {Object.keys(squad.stats).map((stat) => (
            <li key={stat}>{stat}: {squad.stats[stat]}</li>
          ))}
        </ul>
      </div>
    </div>
    <Button layout="btn_filled" action={() => onDelete(squad.id)}>
      <FA.FaTrashO />
      Delete squad
    </Button>
  </div>
);

Squad.propTypes = {
  squad: PropTypes.shape().isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Squad;
