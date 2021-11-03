import { modalActions } from "../actions";

const modalReducer = (state = {}, action) => {
  switch(action.type) {
    case modalActions.SET_MODAL_INFO:
      return action.payload;
      
    default:
      return state;
  }
}

export default modalReducer;