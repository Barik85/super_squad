import React from 'react';
import PropTypes from 'prop-types';
// import * as FA from 'react-icons/lib/fa';
// import Button from './button/Button';
import Squad from './squad/Squad';

const SquadList = ({squads, onDelete}) => (
  <div>
    <ul>
      {squads.map((squad) =>(
        <li key={squad.id}>
          <Squad squad={squad} onDelete={onDelete}/>
          {/* <div>
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
          <Button layout="btn_filled" action={() => onDelete(squad.id)}>
            <FA.FaTrashO/>
            Delete squad
          </Button> */}
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
