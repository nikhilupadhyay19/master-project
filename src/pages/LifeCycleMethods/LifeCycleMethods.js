import React from "react";

class LifeCycleMethods extends React.Component {
  // Mounting Pahse...
  constructor() {
    super();
    this.state = {
      isVissible: true
    };
    console.log("Contructor Method");
  }
  componentDidMount() {
    console.log("componentDidMount Method");
    this.setState((prevSate, prevProp) => {
      return (prevSate.isVissible = false);
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpadate Method");
  }
  componentWillUnmount() {
    console.log("componentDidUpdate Method");
  }
  render() {
    console.log("Render Method");
    return null;
  }
}
export default LifeCycleMethods;
