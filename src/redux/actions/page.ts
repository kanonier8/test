import { TPage } from '../reducers/pageReducer';

export const SET_PAGE = 'SET_PAGE';
export const SET_UID = 'SET_UID';

export interface ISetPage {
  type: typeof SET_PAGE,
  payload: TPage
}

export interface ISetUid {
  type: typeof SET_UID,
}

export function setPage(page: TPage): ISetPage {
  console.log('run set page');
  return {
    type: SET_PAGE,
    payload: page
  }
}

export function setUid() {
  console.log('run uid');
  return (dispatch: any) => {
    fetch('https://lisobact.ctc.ru/api/quiz/init', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response =>
        dispatch({
          type: SET_UID,
          payload: response.uid,
        })
      )
  }
}

