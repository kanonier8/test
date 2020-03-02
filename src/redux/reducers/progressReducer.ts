import { AnyAction } from 'redux';

export interface IProgress {
  answersResult: boolean[];
  currentQuestion: number;
}

const initialState = {
  answersResult: [],
  currentQuestion: 0,
};

export function progressReducer(state = initialState, action: AnyAction) {
  return state;
}
