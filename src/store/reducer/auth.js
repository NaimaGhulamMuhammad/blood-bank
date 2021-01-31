import {Create_User} from "../ActionTypes"

export default(state=[], action)=>{
  switch(action.type){
    case Create_User:
        return action.payload;
    default:
      return state;
  }
}