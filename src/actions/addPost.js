export const ADD_POST = 'ADD_POST';

export function addPost(correctPostsList) {
  return {
    type: ADD_POST,
    payload: correctPostsList,
  };
}
