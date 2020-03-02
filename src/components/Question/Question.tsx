import React from 'react';
import styles from './Question.module.css';

export interface IAnswer {
    id: string;
    title: string;
}

export interface IQuestion {
    id: string;
    title: string;
    image: string;
    answers: {
        data: IAnswer;
    }
}

interface IQustionProps {
    data: IQuestion
}

export function Question({ data }: IQustionProps) {
    return (
        <div>Question</div>
    )
}
