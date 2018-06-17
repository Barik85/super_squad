import React from 'react';
import PropTypes from 'prop-types';

const SquadStatistic = ({statistic}) => {
  const keys = Object.keys(statistic);
  const values = Object.values(statistic);

  return (
    <ul>
      <li key={keys[0]}>Strength: {values[0]}</li>
      <li key={keys[1]}>Intelligence: {values[1]}</li>
      <li key={keys[2]}>Speed: {values[2]}</li>
    </ul>
  )
}

SquadStatistic.propTypes = {
  statistic: PropTypes.shape(),
}

SquadStatistic.defaultProps = {
  statistic: {}
}

export default SquadStatistic;
