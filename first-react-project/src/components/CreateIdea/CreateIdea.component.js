import React, { Component } from 'react';

class CreateIdea extends Component {
    constructor(props) {
      super(props);
      this.state = { title: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ 
          title: event.target.value
        });
    }
  
    handleSubmit(event) {
      alert('A title was submitted: ' + this.state.title);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h2>Create New Idea</h2>
          <label>
            Title:
            <input type="text" value={ this.state.title } onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default CreateIdea;