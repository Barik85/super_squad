import React from 'react';
import PropTypes from 'prop-types';
import typografy from './typography/titles.css';

const SquadStatistic = ({statistic}) => {
  const entries = Object.entries(statistic);

  return (
    <ul className={typografy.statistic}>
      {entries.map(([key, value]) => (
        <li key={key}>{key}: <b>{value}</b></li>
      ))}
    </ul>
  );
}

SquadStatistic.propTypes = {
  statistic: PropTypes.shape(),
}

SquadStatistic.defaultProps = {
  statistic: {}
}

export default SquadStatistic;
