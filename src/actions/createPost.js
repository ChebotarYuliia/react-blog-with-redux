export const CREATE_POST = 'CREATE_POST';

export function createPost(newPost) {
  return {
    type: CREATE_POST,
    payload: newPost,
  };
}
