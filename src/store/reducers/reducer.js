import {todoAction} from '../actions/todoActions';

export var todoReducer = (state={ firebasePush: false, getData: false, data:[] },action) =>{
    switch(action.type){
        case todoAction.ADDTODO:
            return {...state, firebasePush: true};
        case todoAction.GETTODO:
            return {...state, getData: true, data:action.payload};
        default:
            return state ;
    }
}