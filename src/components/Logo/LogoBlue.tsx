import React from 'react';
import styles from './LogoBlue.module.css';
import logoBlueImg from './img/blue.png'

export function LogoBlue() {
    return (
        <div className={styles.logo}>
            <img src={logoBlueImg} alt="От инфекций горла - Лизобакт"/>
        </div>
    )
}
