import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import { SubmissionError } from 'redux-form'
class App extends React.Component {
  submit = inputs => {
    if (['nishant', 'Akshay'].includes(inputs.username)) {
      throw new SubmissionError({
        username: 'Username is already taken',
      });
    }
    else {
      console.log(inputs);
      window.alert(JSON.stringify(inputs))
    }
  }
  getInitialValues() {
    return {
      username: 'nishant',
      password: 'hello'
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Redux From</h1>
        <LoginForm onSubmit={this.submit} initialValues={this.getInitialValues()} />
      </div>
    );
  }
}
export default App;