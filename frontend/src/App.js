// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };

  // This is where the magic happens
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching data from Django API
      const todos = await res.json();
      this.setState({ todos });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
             <p>{item.created_at}</p>
             <p>{item.updated_at}</p>
             <p>{item.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
