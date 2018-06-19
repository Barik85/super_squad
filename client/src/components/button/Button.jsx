import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({action, children, type, layout}) => (
    <button onClick={action} className={styles[layout]} type={type}>
      <span>{children}</span>
    </button>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.shape(),
  ]),
  type: PropTypes.string,
  layout: PropTypes.string,
}

Button.defaultProps = {
  children: {},
  type: 'button',
  layout: 'btn'
}

export default Button;
