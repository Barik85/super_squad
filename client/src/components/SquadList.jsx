import React from 'react';
import PropTypes from 'prop-types';
import Squad from './squad/Squad';

const SquadList = ({squads, onDelete}) => (
  <div>
    <ul>
      {squads.map((squad) =>(
        <li key={squad.id}>
          <Squad squad={squad} onDelete={onDelete}/>
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
