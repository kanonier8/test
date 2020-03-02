import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface IButtonProps{
    isSuccess?: boolean;
    isMargin?: boolean;
    children: string;
}

export function Button({ children, isSuccess, isMargin }: IButtonProps) {
    const classes = classNames(
        styles.button,
        {
            [styles.buttonSuccess]: isSuccess,
            [styles.buttonMargin]: isMargin,
        },
    );
    return (
        <button className={classes}>
            { children }
        </button>
    )
}
