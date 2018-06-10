import React from 'react';
import PropTypes from 'prop-types';

const SquadEditor = ({actions}) => (
  <div>
    <button onClick={actions.onSave}>Save Squad</button>
    <button onClick={actions.Reset}>Reset Editor</button>
  </div>
);

SquadEditor.propTypes ={
  actions: PropTypes.shape(
    PropTypes.func
  )
}

SquadEditor.defaultProps ={
  actions: {}
}

export default SquadEditor;
