import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = ({label, added, removed, disabled}) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{label}</div>
        <button onClick={removed} disabled={disabled} className={styles.More}>Less</button>
        <button onClick={added} className={styles.More}>More</button>
    </div>
)

export default buildControl