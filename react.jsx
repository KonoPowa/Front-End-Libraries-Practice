// change code below this line
class MyComponent extends React.Component{
constructor(props) {
    super(props);
}
  render(){
  return(
    <div>
      <h1>My First React Component!</h1>
    </div>

  );

  }

};
ReactDOM.render(<MyComponent />,document.getElementById('challenge-node'))









//React: Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date = {Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};








//React: Pass an Array as Props**********************
const List = (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks = {["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks = {["walk dog", "workout", "random"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};







//React: Use Default Props**********************
const ShoppingCart = (props) => {
  ShoppingCart.defaultProps = {items: 0}
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
