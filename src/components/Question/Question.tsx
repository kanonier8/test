import React from 'react';
import { IQuestion } from '../../redux/reducers/quizReducer';
import styles from './Question.module.css';

interface IQustionProps {
    data: IQuestion
}

export function Question({ data }: IQustionProps) {
    return (
        <div>Question</div>
    )
}
