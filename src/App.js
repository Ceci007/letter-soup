import React, { Component } from "react";
import "./App.scss";
import Validation from "./ValidationComponent/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: ""
  };

  lenghtHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          key={index}
          character={ch}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="container">
        <form className="text">
          <input
            type="text"
            onChange={this.lenghtHandler}
            value={this.state.userInput}
            className="text__input"
          />
          <button className="text__button">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </form>
        <p className="paragraph">{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
