import React from 'react';
import PropTypes from 'prop-types';

const SquadEditor = ({actions}) => (
  <div>
    <button onClick={actions.onSave}>Save Squad</button>
    <button onClick={actions.onReset}>Reset Editor</button>
  </div>
);

SquadEditor.propTypes ={
  actions: PropTypes.objectOf(PropTypes.func)
}

SquadEditor.defaultProps ={
  actions: {}
}

export default SquadEditor;
