//importing react and reactdom
import React from "react";
import ReactDOM from "react-dom";

//creating the app class
class App extends React.Component {
  //constructor setting the initial state of first, last, and full name to empty strings
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  }

  //evt handler to update the state of first name
  changeFirstName = (evt) => {
    let value = evt.target.value;
    this.setState({ firstName: value });
  };

  //evt handler to update the state of last name
  changeLastName = (evt) => {
    let value = evt.target.value;
    this.setState({ lastName: value });
  };

  //evt handler on form submittal
  getFullName = (evt) => {
    //preventing page reload
    evt.preventDefault();
    //updating fullName variable state
    this.setState({
      fullName: this.state.firstName + " " + this.state.lastName + "!",
    });
    //resetting the state of first and last to empty strings
    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getFullName.bind(this)}>
          <input
            type="text"
            name="first"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.changeFirstName.bind(this)}
          />
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.changeLastName.bind(this)}
          />
          <input type="submit" value="submit" />
        </form>
        <h2>Full Name:</h2>
        <h4>Hello {this.state.fullName}</h4>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
export default App;
