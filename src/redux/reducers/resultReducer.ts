import { AnyAction } from 'redux';

export interface IResult {
  title: string,
  score: number,
}

const initialState: IResult = {
  title: 'Some title',
  score: 0
};

export function resultReducer(state = initialState, action: AnyAction) {
  return state
}
