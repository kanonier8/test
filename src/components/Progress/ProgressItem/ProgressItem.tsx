import React from 'react';
import classNames from 'classnames';
import styles from './ProgressItem.module.css'

interface IProgressItemProps {
    isActive?: boolean;
    isCorrect?: boolean;
    isWrong?: boolean;
    isDisabled?: boolean;
}
export function ProgressItem({ isWrong = false,
                               isActive = true,
                               isCorrect = false,
                               isDisabled= false }: IProgressItemProps) {
    const classes = classNames(
        styles.item,
        {
            [styles.itemActive]: isActive,
            [styles.itemSuccess]: isCorrect,
            [styles.itemFailed]: isWrong,
            [styles.itemDisabled]: isDisabled
        }
    );
    return ( <div className={classes} /> )
}
