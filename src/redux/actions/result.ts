export const SET_RESULT = 'SET_RESULT';

export interface ISetResult {
  type: typeof SET_RESULT,
  payload: string
}

export function setResult(text: string): ISetResult {
  return {
    type: SET_RESULT,
    payload: text
  }
}
