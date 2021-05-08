import { GET_USER_DATA } from '../actions/types';

const initialState = {
  data: null,
  todoId: -1,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
