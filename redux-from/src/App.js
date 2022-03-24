
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
class App extends React.Component {
 
  submit = values => {
    console.log(values);
    window.alert(JSON.stringify(values))
  }
  getInitialValues() {
    return {
      username:'nishant',
      password:'hello'
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