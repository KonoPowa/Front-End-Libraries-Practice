//React and Redux: Getting Started with React Redux******************
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props){
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};










//React and Redux: Manage State Locally First******************
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }

  submitMessage(){
    let newMessage = [...this.state.messages, this.state.input]
    this.setState({
      messages: newMessage,
      input: ''
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input value = {this.state.input} onChange = {this.handleChange}/>
        <button onClick = {this.submitMessage} />
        <ul>
        {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>

        { /* change code above this line */ }
      </div>
    );
  }
};








//React and Redux: Extract State Logic to Redux**********************
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD"

const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);






//React and Redux: Use Provider to Connect Redux to React***************************
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
  render(){
    return (
      <Provider store = {store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // change code above this line
};








//React and Redux: Map State to Props**********************
const state = [];

// change code below this line
const mapStateToProps = (state) =>{
  return {
    messages: state
  }

}
