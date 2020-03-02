export const CHECK_ANSWER_REQUEST = 'CHECK_ANSWER_REQUEST';
export const CHECK_ANSWER_SUCCESS = 'CHECK_ANSWER_SUCCESS';
export const CHECK_ANSWER_ERROR = 'CHECK_ANSWER_ERROR';

export function checkAnswer(id: string, uid: string) {
  return (dispatch: any) => {
    dispatch({
        type: CHECK_ANSWER_REQUEST
    });

    fetch('https://lisobact.ctc.ru/api/quiz/check', {
      method: 'POST',
      headers: { 'uid': uid },
      body: id
    })
      .then(response => response.json())
      .then(response =>
          dispatch({
            type: CHECK_ANSWER_SUCCESS,
            payload: response
          })
      )
      .catch(error =>
        dispatch({
          type: CHECK_ANSWER_ERROR,
          payload: error,
          error: true
        })
      )
  }
}
