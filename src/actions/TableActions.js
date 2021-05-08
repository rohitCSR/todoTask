import { GET_TABLE_DATA } from './types';

export const getTableData = () => async (dispatch) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  dispatch({
    type: GET_TABLE_DATA,
    payload: data,
  });
};
