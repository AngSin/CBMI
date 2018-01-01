import React, { Component } from 'react';
import './App.css';

import { Form } from './components/form';
import { Answer } from './components/answer';

export default class App extends Component {
  state = { name: '', chest: '', LIM: '', CBMI: '' }
  calculateCBMI = () => {
    let { LIM, chest } = this.state;
    if (!LIM || !chest) {
      alert('Please fill all measurements!');
      return;
    }
    let CBMI = Number((((chest/0.7067) - LIM)/0.9156) - LIM).toFixed(2);
    this.setState({ CBMI });
    console.log(CBMI/50 * 100);
  }
  render() {
    let { CBMI, LIM, chest, name } = this.state;
    return (
      <div className="row">
        <div className="col-lg-6 hidden-md hidden-sm hidden-xs" />
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <h1><i>Is your cat fat?</i></h1>
          <Form
            name={ name }
            changeName={ name => this.setState({ name })}
            chest={ chest }
            changeChest={ chest => this.setState({ chest })}
            LIM={ LIM }
            changeLIM={ LIM => this.setState({ LIM })}
            calculateCBMI={ this.calculateCBMI }
          />
          <Answer
            name={ name }
            CBMI={ CBMI }
          />
        </div>
      </div>
    );
  }
}
