import React from 'react';
import PropTypes from 'prop-types';

const SquadStatistic = ({squad}) => {
  const strength = squad.reduce((sum , hero) => sum + hero.strength, 0);
  const intelligence = squad.reduce((sum , hero) => sum + hero.intelligence, 0);
  const speed = squad.reduce((sum , hero) => sum + hero.speed, 0);

  return (
    <ul>
      <li>Strength: {strength}</li>
      <li>Intelligence: {intelligence}</li>
      <li>Speed: {speed}</li>
    </ul>
  )
}

SquadStatistic.propTypes = {
  squad: PropTypes.arrayOf(PropTypes.any)
}

SquadStatistic.defaultProps = {
  squad:[]
}

export default SquadStatistic;
