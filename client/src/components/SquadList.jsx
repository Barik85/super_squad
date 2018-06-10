import React from 'react';
import PropTypes from 'prop-types';

// "squads": [
//   {
//     "heroes": [
//       {
//         "id": 1,
//         "name": "Batman",
//         "strength": 7,
//         "intelligence": 10,
//         "speed": 6
//       }
//     ],
//     "stats": {
//       "str": 7,
//       "int": 10,
//       "spd": 6
//     },
//     "id": 1
//   }
// ]

const SquadList = ({squads}) => (
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
              {/* {Array.prototype.map.call(squad.stats, (stat, i, arr) => (
                <li>{stat}: {arr[stat]}</li>
              ))} */}
              {Object.keys(squad.stats).map((stat) => (
                <li key={stat}>{stat}: {squad.stats[stat]}</li>
              ))}
              {console.log(squad.stats)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

SquadList.propTypes = {
  squads: PropTypes.shape({
    heroes: PropTypes.arrayOf(PropTypes.any),
    stats: PropTypes.shape(PropTypes.any),
    id: PropTypes.string,
  }),
}

SquadList.defaultProps = {
  squads: {}
}

export default SquadList;
