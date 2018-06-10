import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';

const HeroList = ({heroes, actions}) => (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>
          <Hero dataHero={hero} actions={actions}/>
        </li>
        )
      )}
    </ul>
)


HeroList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape(
    PropTypes.func
  )
}

HeroList.defaultProps = {
  heroes: [],
  actions: {}
}

export default HeroList;
