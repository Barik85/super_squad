import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.css';
import titleStyle from '../typography/titles.css';
import geometry from '../OuterGeometry.css';
import {classList} from '../../utils/utils';

const Panel = ({title, children}) => (
  <div className={styles.panel}>
  <h2 className={classList([titleStyle.heading2, geometry.mb20])}> {title} </h2>
  {children}
  </div>
)

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.shape(),
    PropTypes.any,
  ])
}

Panel.defaultProps = {
  title: '',
  children: []
}

export default Panel;
