import {Create_User,A_positive , B_positive,A_negative, B_negative, O_Universal_Donar,AB_Universal_Reciever} from '../ActionTypes'
import firebase from '../../config/firebase'
// 

export const CreateUser = (user) => (dispatch) => {
  // var key = firebase.database().ref('users').push().key
  // user['id'] = key
  var isDonar = user.donar
  try{
   firebase.database().ref(isDonar?'donars':'users').set(user)
  dispatch({type:Create_User, payload:user})
  }
  catch(error){
    console.log("firebase=>",error)
  }
};
