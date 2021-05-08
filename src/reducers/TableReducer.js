import { GET_TABLE_DATA } from '../actions/types';

const initialState = {
  data: [],
};

const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default TableReducer;
