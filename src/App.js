import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
   state = {
      username: 'Mandres'
   }

   inputChangedHandler = (event) => {
      this.setState({ username: event.target.value });
   }

   render() {
      return (
         <div className="App">
            <ol>
               <li>Create TWO components: UserInput and UserOutput</li>
               <li>UserInput should hold an input element, UserOutput two paragraphs</li>
               <li>Output multiple UserOutput components in the App component</li>
               <li>Pass a username to UserInput via props</li>
               <li>Add state to the App Component to manage username and pass it to the UserInput</li>
               <li>Add a method to manipulate the state</li>
               <li>Pass the event handler method reference to the UserInput component</li>
               <li>Ensure that the new input entered overwrites the state</li>
               <li>Add two way binding to your input</li>
               <li>Add styling</li>
            </ol>
            <UserInput username={this.state.username} onInputChanged={this.inputChangedHandler} />
            <UserOutput username={this.state.username} />
            <UserOutput username={this.state.username} />
            <UserOutput username='LOLO' />
         </div>
      );
   }
}

export default App;
