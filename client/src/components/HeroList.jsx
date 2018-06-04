/* eslint-disable */
// "heroes": [
//   {
//     "id": 0,
//     "name": "Superman",
//     "strength": 10,
//     "intelligence": 7,
//     "speed": 9
//   },

import React from 'react';
// import PropTypes from 'prop-types';
import Hero from './Hero';

const HeroList = ({heroes, ...props}) => (
  <ul>
    {heroes.map((hero) => (
      <li key={hero.id}>
        <Hero name={hero.name}/>
      </li>
      )
    )}
  </ul>
)

export default HeroList;
