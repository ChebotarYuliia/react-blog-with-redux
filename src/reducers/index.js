import { combineReducers } from 'redux';
import { postReducer } from './post';
import { createPostReducer } from './createPost';

export const rootReducer = combineReducers({
  posts: postReducer,
  emptyPost: createPostReducer,
});
