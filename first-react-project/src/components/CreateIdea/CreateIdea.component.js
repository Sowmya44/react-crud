import React, { Component } from 'react';
import './CreateIdea.css';

class CreateIdea extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.idea = {};
    }
  
    handleSubmit(event) {
      const newIdea = {
          title: this.idea.title.value,
          name: this.idea.name.value,
          abstract: this.idea.abstract.value,
          user_name: this.idea.user_name.value,
          user_email: this.idea.user_email.value
      };
      alert('An idea was submitted:' + JSON.stringify(newIdea));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h2>Create New Idea</h2>
        <div className="create-form">
            <div className="form-row">
                <label>
                    Title:
                    <input 
                     type="text"
                     placeholder="Enter title for Idea"
                     ref={node => this.idea.title = node} />
                </label>
            </div>
            <div className="form-row">
                <label>
                    Team Name:
                    <input type="text"
                     placeholder="Enter Team Name"
                     ref={node => this.idea.name = node} />
                </label>
            </div>
            <div className="form-row">
                <label>
                    Abstract:
                    <textarea 
                     placeholder="Enter Abtract Here"
                     ref={node => this.idea.abstract = node} />
                </label>
            </div>
            <div className="form-row">
                <label>
                    Your Name:
                    <input type="text"
                     placeholder="Enter Leader Name"
                     ref={node => this.idea.user_name = node} />
                </label>
            </div>
            <div className="form-row">
                <label>
                    Your Email:
                    <input type="email"
                     required
                     placeholder="Enter Email"
                     ref={node => this.idea.user_email = node} />
                </label>
            </div>
            <div className="form-row">
                <input type="submit" value="Submit" />
            </div>
        </div>
        </form>
      );
    }
  }

export default CreateIdea;