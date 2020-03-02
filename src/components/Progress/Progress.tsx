import React from 'react';
import { ProgressTitle } from "./ProgressTitle";
import { ProgressLabel } from "./ProgressLabel";
import styles from './Progress.module.css';
import {ProgressItem} from "./ProgressItem";

interface IProgressProps {
    questions: any[];
}

export function Progress({ questions}: IProgressProps) {
    return (
        <div className={styles.progress}>
            <ProgressTitle />
            <ProgressLabel counter={1}/>
            <div className={styles.progressItemList}>
                { questions.map((question: any, index) =>  <ProgressItem key={index} /> ) }
            </div>
        </div>
    )
}
