import React from 'react';
import PropTypes from 'prop-types';

const SquadList = ({squads, onDelete}) => (
  <div>
    <ul>
      {squads.map((squad) =>(
        <li key={squad.id}>
          <div>
            <h3>Heroes</h3>
            <ul>
              {squad.heroes.map((hero) => (
                <li key={hero.id}>{hero.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Stats</h3>
            <ul>
              {Object.keys(squad.stats).map((stat) => (
                <li key={stat}>{stat}: {squad.stats[stat]}</li>
              ))}
            </ul>
          </div>
          <button  onClick={() => onDelete(squad.id)}>Delete squad</button>
        </li>
      ))}
    </ul>
  </div>
)

SquadList.propTypes = {
  squads: PropTypes.arrayOf(
    PropTypes.shape()
  ),
  onDelete: PropTypes.func,
}

SquadList.defaultProps = {
  squads: [],
  onDelete: () => {}
}

export default SquadList;
