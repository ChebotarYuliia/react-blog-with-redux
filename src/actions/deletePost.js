export const DELETE_POST = 'DELETE_POST';

export function deletePost(correctPostsList) {
  return {
    type: DELETE_POST,
    payload: correctPostsList,
  };
}
