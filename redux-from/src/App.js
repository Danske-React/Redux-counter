
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
class App extends React.Component {
  submit = values => {
    window.alert (JSON.stringify(values))
  }

  render() {
    return (
      <div className="App">
       <h1>Redux From</h1>
       <LoginForm onSubmit={this.submit}/> 
        
      </div>
    );
  }
}

export default App;
