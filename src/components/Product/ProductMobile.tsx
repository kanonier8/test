import React from 'react';
import styles from './ProductMobile.module.css';
import productMobileImg from './img/productMobile.png'

export function ProductMobile() {
    return (
        <div className={styles.image}>
            <img src={productMobileImg} alt="Лизобакт"/>
        </div>
    )
}
