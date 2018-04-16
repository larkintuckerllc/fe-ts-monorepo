import React from 'react';
import styles from './styles.less';

const Styling = () => (
  <div id={styles.root}>
    <h2 className="my_global">Styling</h2>
    <div id={styles.rootContainer}>
      <div className={styles.rootContainerItem}>One</div>
      <div className={styles.rootContainerItem}>Two</div>
      <div className={styles.rootContainerItem}>Three</div>
    </div>
  </div>
);
export default Styling;
