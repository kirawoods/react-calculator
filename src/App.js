import React, { Component } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { evaluate } from "mathjs"; 


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      isError: false, 
    };
  }
  
  addToInput = value => {
    this.setState({input: this.state.input + value});

  };

  handleEqual = () => {
    if (this.state.input !== "") {
      try {
        this.setState({ input: evaluate(this.state.input) });
      }
      catch(error) {
        this.setState({isError: true}); 
      }
    }
  };

  render() {
    const valueToDisplay = (this.state.isError) ? "ERROR" : this.state.input;
    return (
      <div className = "app">
        <div className = "calculator-wrapper">
          <Input input={valueToDisplay} />
          <div className = "button-row"> 
            <Button handleClick = {this.addToInput}>7</Button>
            <Button handleClick = {this.addToInput}>8</Button>
            <Button handleClick = {this.addToInput}>9</Button>
            <Button handleClick = {this.addToInput}>/</Button>
          </div>
          <div className = "button-row"> 
            <Button handleClick = {this.addToInput}>4</Button>
            <Button handleClick = {this.addToInput}>5</Button>
            <Button handleClick = {this.addToInput}>6</Button>
            <Button handleClick = {this.addToInput}>*</Button>
          </div>
          <div className = "button-row"> 
            <Button handleClick = {this.addToInput}>1</Button>
            <Button handleClick = {this.addToInput}>2</Button>
            <Button handleClick = {this.addToInput}>3</Button>
            <Button handleClick = {this.addToInput}>+</Button>
          </div>
          <div className = "button-row"> 
            <Button handleClick = {this.addToInput}>.</Button>
            <Button handleClick = {this.addToInput}>0</Button>
            <Button handleClick = {this.handleEqual}>=</Button>
            <Button handleClick = {this.addToInput}>-</Button>
          </div>
          <div className = "button-row"> 
            <ClearButton handleClear = {() => this.setState({input: "", isError: false})}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
