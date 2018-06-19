import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/lib/fa';
import Button from './button/Button';
import geometry from './OuterGeometry.css';

const SquadEditor = ({actions}) => (
  <div>
    <div className={geometry.m20auto}>
      <Button action={actions.onSave} layout="btn_filled">
        <FA.FaCheck/>
        Save Squad
      </Button>
    </div>
    <div className={geometry.m20auto}>
      <Button action={actions.onReset} layout="btn_filled">
        <FA.FaClose/>
        Reset Editor
      </Button>
    </div>
  </div>
);

SquadEditor.propTypes ={
  actions: PropTypes.objectOf(PropTypes.func)
}

SquadEditor.defaultProps ={
  actions: {}
}

export default SquadEditor;
