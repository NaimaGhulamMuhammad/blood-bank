import {A_positive , B_positive,A_negative, B_negative, O_Universal_Donar,AB_Universal_Reciever} from '../ActionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case A_positive:
      return action.payload;
    default:
      return state;
  }
};
