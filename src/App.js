import React, { Component } from 'react';
import logo from './Assets/logo.png';
import './App.css';
import Modal from './Modal';


class App extends Component {

  state = {
    homeVal: undefined,
    mortgageVal: undefined,
    outstandingLoans: undefined,
    result: null,
    showResult: false,
    showError: false,
    buttonText: 'Click here to calculate'
  }

  calculationHandler = () => {
    const { homeVal, mortgageVal, outstandingLoans } = this.state;
    if (!homeVal) {
      this.setState({showError: true});
    } else if (homeVal && mortgageVal && outstandingLoans) {
      this.setState({
        result: homeVal - (mortgageVal - outstandingLoans),
        showResult: true,
        buttonText: 'Click here to try again'
      });
    } else {
      this.setState({
        result: homeVal - mortgageVal,
        showResult: true,
        buttonText: 'Click here to try again'
      });
    }
  }

  //this allows you to 'control' the inputs, so they act Reacty
  //but at first you can't type in them, so you need an update handler
  updateInputHandler = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseInt(value)
    });
  };

  closeModalHandler = () => {
    this.setState({
      showResult: false,
      buttonText: 'Click here to calculate'
    });
    if (this.state.showError) {
      this.setState({showError: false});
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello RL! Welcome to the equity calculator</h1>
        </header>
        <section className="text">
          <p>Give it a try, at the moment it simply subtracts the outstanding mortgage and loans from the value of the home</p>
        </section>

        <Modal show={this.state.showResult} modalClosed={this.closeModalHandler}>
          {this.state.result}
        </Modal>

        <section className="form">
          <section className="form-section home">
        
            <p>{this.state.showError ? 'Please tell us how much your home is worth to continue' : 'Firstly, how much is your home worth?'}</p>
            <input autoFocus
              name="homeVal"
              type="number"
              value={this.state.homeVal}
              onChange={evt => this.updateInputHandler(evt)} />
          </section>
          <section className="form-section mortgage">
            <p>How much is left to pay on your mortgage?</p>
            <input
              name="mortgageVal"
              type="number"
              value={this.state.mortgageVal}
              onChange={evt => this.updateInputHandler(evt)} />
          </section>
          <section className="form-section loans">
            <p>If you have any loans secured against your home, how much is left to pay?</p>
            <input
              name="outstandingLoans"
              type="number"
              value={this.state.outstandingLoans}
              onChange={evt => this.updateInputHandler(evt)} />
          </section>
          <button className="button" onClick={this.calculationHandler}>{this.state.buttonText}!</button>



        </section>



      </div>
    );
  }
}

export default App;
