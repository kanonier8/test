import { AnyAction } from 'redux';

export interface IAnswer {
  id: string;
  title: string;
}

export interface IQuestion {
  id: string;
  title: string;
  image: string;
  answers: {
    data: IAnswer[];
  }
}

export interface IQuiz {
  data: IQuestion[],
  isFetching: boolean,
}

const initialState: IQuiz = {
  data: [],
  isFetching: false
};

export function quizReducer(state = initialState, action: AnyAction) {
  return state
}
