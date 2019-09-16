import React, { Component } from "react";
import logo from "./images/citibanamex-logo.png";
import "./App.css";

class App extends Component {
  state = {
    //Toogle Input Text and Label Text
    isHidden: true,
    formHidden: false,
    //Input Text value
    value: "",
    //3 Step verification
    firstStep: true,
    secondStep: false,
    thirdStep: false,
    //Dummy Test Info
    customerNumber: "123456",
    customerLastname: "Zepeda",
    customerPhone: "9726971683"
  };

  //Handle value change on input text field
  handleValueChange = props => {
    this.setState({ value: props.target.value });
  };

  //Handle all three steps of verification
  handleVerification = () => {
    //console.log(this.state.value);

    //Handle Customer Number Verification
    if (this.state.firstStep) {
      //Check inputed number to number is DB
      if (this.state.customerNumber === this.state.value) {
        //Change state to step 2
        this.setState({ firstStep: false });
        this.setState({ secondStep: true });
        this.setState({ thirdStep: false });
        //Toogle invalid input label to hidden
        if (!this.state.isHidden)
          this.setState({ isHidden: !this.state.isHidden });
        //Toogle invalid input label to visible
      } else if (this.state.isHidden)
        this.setState({ isHidden: !this.state.isHidden });
      //Handle Customer Lastname Verification
    } else if (this.state.secondStep) {
      //Check inputed lastname to lastname is DB
      if (this.state.customerLastname === this.state.value) {
        //Change state to step 3
        this.setState({ firstStep: false });
        this.setState({ secondStep: false });
        this.setState({ thirdStep: true });
        //Toogle invalid input label to hidden
        if (!this.state.isHidden)
          this.setState({ isHidden: !this.state.isHidden });
        //Toogle invalid input label to visible
      } else if (this.state.isHidden)
        this.setState({ isHidden: !this.state.isHidden });
      //Handle Customer Phone Verification
    } else if (this.state.thirdStep) {
      //Check inputed number to number is DB
      if (this.state.customerPhone === this.state.value) {
        //Change state to verification
        this.setState({ firstStep: false });
        this.setState({ secondStep: false });
        this.setState({ thirdStep: false });
        //Hide input form
        this.setState({ formHidden: true });
        //Toogle invalid input label to hidden
        if (!this.state.isHidden)
          this.setState({ isHidden: !this.state.isHidden });
        //Toogle invalid input label to visible
      } else if (this.state.isHidden)
        this.setState({ isHidden: !this.state.isHidden });
      //Handle Customer Lastname Verification
    }

    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <nav class="#fafafa grey lighten-5">
          <div class="container center-align">
            <img src={logo} class="App-logo" alt="logo" />
          </div>
        </nav>
        <div class="App-header">
          <div class="row" />
          <div class="row" />
          <div class="row" />
          <div class="row" />
          <div class="row" />
          <div class="row" />
          <div class="row">
            <form
              class="col s12"
              onSubmit={e => {
                e.preventDefault();
                this.handleVerification();
              }}
            >
              <div class="col s4" />
              {!this.state.formHidden && (
                <div class="input-field inline col s4">
                  <input
                    id="customer_num"
                    type="text"
                    class="white-text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                  />
                  <label for="customer_num">
                    {(this.state.firstStep && "Enter Your Customer Number") ||
                      (this.state.secondStep && "Verify Your Last Name") ||
                      (this.state.thirdStep && "Verify Your Phone")}
                  </label>
                  <span class="helper-text red-text text-darken-4 center-align">
                    {(!this.state.isHidden &&
                      this.state.firstStep &&
                      "Invalid Customer Number") ||
                      (!this.state.isHidden &&
                        this.state.secondStep &&
                        "Invalid Lastname") ||
                      (!this.state.isHidden &&
                        this.state.thirdStep &&
                        "Invalid Phone Number")}
                  </span>
                </div>
              )}
              {this.state.formHidden && (
                <div class="col s4 center-align">
                  <h1 class="white-text">Verified</h1>
                </div>
              )}
              <div class="col s4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
