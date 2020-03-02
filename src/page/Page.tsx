import React, {ReactElement} from 'react';
import styles from './Page.module.css';

export interface IPageProps {
    children: ReactElement;
}

export function Page({children}: IPageProps) {
    return (
        <div className={styles.page}>
            { children }
        </div>
    )
}
