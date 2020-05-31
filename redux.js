//Redux: Get State from the Redux Store***************
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
let currentState = store.getState()





//Redux: Define a Redux Action*************
// Define an action here:
let action = {
  type: 'LOGIN'
}






//Redux: Define an Action Creator*****************
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator(){
  return action
}







//Redux: Dispatch an Action Event****************
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())








//Redux: Handle an Action in the Store*********************
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
if(action.type == 'LOGIN'){
  return {login: true}
}else{
  return state
}
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};










//Redux: Use a Switch Statement to Handle Multiple Actions*****************************
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch(action.type){
    case 'LOGIN':
      return {authenticated: true}
    case 'LOGOUT':
      return {authenticated: false}
    default:
      return defaultState
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};







//Redux: Use const for Action Types*************************
// change code below this line
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};







//Redux: Register a Store Listener************************
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
const addOne = () => (count += 1);
store.subscribe(addOne)
// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);







//Redux: Combine Multiple Reducers**************
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});
const store = Redux.createStore(rootReducer);










const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // change code below this line

    case ADD_NOTE:
      return action.text;

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = note => {
  // change code below this line

  return {
    type: ADD_NOTE,
    text: note
  };

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());