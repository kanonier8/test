import React from 'react';
import styles from './LogoWhite.module.css';
import logoWhiteImg from './img/white.png'

export function LogoWhite() {
    return (
        <div className={styles.logo}>
            <img src={logoWhiteImg} alt="От инфекций горла - Лизобакт"/>
        </div>
    )
}
