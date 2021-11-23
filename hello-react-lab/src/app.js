import React from "react";

import ReactDOM from "react-dom";

//setting up App class component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  //render returns the h1 on the page
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(<App name='React' />, document.getElementById("root"));
