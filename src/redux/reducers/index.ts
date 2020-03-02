import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { progressReducer } from './progressReducer';
import { quizReducer } from './quizReducer';
import { resultReducer } from './resultReducer';

export const rootReducer = combineReducers({
  page: pageReducer,
  result: resultReducer,
  quiz: quizReducer,
  progress: progressReducer
});

const store = {
  page: 'start',
  result: {
    title: 'Some title',
    score: 5
  },
  quiz: [
    {
      question: {
        id: '12',
        title: 'title',
        image: 'image.src',
        answers: [
          {
            id: '123',
            title: 'some answer option'
          }
        ]
      }
    }
  ],
  progress: {
    answersResult: [true, false],
    currentQuestion: 3,
  }

}
