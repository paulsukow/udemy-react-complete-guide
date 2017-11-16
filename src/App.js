import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 25 },
            { name: "Sara", age: 26 }
        ],
        otherState: 'some other value'
    }
    
    switchNameHandler = () => {
        this.setState( {
             persons: [
            { name: "Maximilian", age: 28 },
            { name: "Manu", age: 25 },
            { name: "Sara", age: 26 }
             ]
        })
      
    }
    
    render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Ahhhhhhhh</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
