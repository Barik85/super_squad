import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../hero/Hero';
import styles from './HeroList.css';

const HeroList = ({heroes, actions}) => heroes.length > 0 ? (
    <ul className={styles.hero_list}>
      {heroes.map((hero) => (
        <li key={hero.id}>
          <Hero {...hero} actions={actions}/>
        </li>
        )
      )}
    </ul>
) : (
  <p className={styles.message}> No heroes yet... </p>
)


HeroList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    strength: PropTypes.number,
    intelligence: PropTypes.number,
    speed: PropTypes.number,
  })),
  actions: PropTypes.objectOf(PropTypes.func,)
}

HeroList.defaultProps = {
  heroes: [],
  actions: {}
}

export default HeroList;
