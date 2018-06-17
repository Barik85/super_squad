import React from 'react';
import PropTypes from 'prop-types';
import styles from './PanelWrapper.css';

const PanelWrapper = ({children}) => (

    <section className={styles.panel_wrapper}>
      {children.map((panel) => (
        <div key={panel.props.name}>{panel}</div>
      ))}
    </section>

)

PanelWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}

PanelWrapper.defaultProps = {
  children: [],
}

export default PanelWrapper;
