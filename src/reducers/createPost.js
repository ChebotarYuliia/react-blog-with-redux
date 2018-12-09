import { CREATE_POST } from '../actions/createPost';

const initialState = {
  emptyPost: {},
};

export function createPostReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return { emptyPost: action.payload };
    default:
      return state;
  }
}
