import React from 'react';
import styles from './Product.module.css';
import productImg from './img/product.png';

export function Product() {
    return (
        <div className={styles.image}>
            <img src={productImg} alt="Лизобакт"/>
        </div>
    )
}
