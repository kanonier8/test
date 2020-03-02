import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPage, setUid } from '../redux/actions';
import { TPage } from '../redux/reducers/pageReducer';
import styles from './Page.module.css';

export interface IPageProps {
    children: ReactElement;
    setUidAction: any;
    setPageAction: any;
}

function PageC({ children, setUidAction, setPageAction }: IPageProps) {
    useEffect(()=> {
        setUidAction();
        setPageAction('result');
    });
    return (
        <div className={styles.page}>
            { children }
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    setPageAction: (page: TPage) => dispatch(setPage),
    setUidAction: () => dispatch(setUid)
});

export const Page = connect(null , mapDispatchToProps)(PageC);
