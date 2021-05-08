import { GET_USER_DATA } from './types';

export const getUserData = (id, userId) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();

    dispatch({
      type: GET_USER_DATA,
      payload: {
        data,
        todoId: id,
      },
    });
  } catch (error) {
    //replace
  }
};
