import React, { Component } from 'react';
import './IdeasList.css';

class IdeasList extends Component {
  state = {
      ideas: []
  }

  getIdeasList() {
      fetch("http://localhost:3001/ideas").then((response) => {
        if (response.status !== 200) {
            throw new Error('Looks like there was a problem. Status Code: ' + response.status);
        }

        response.json().then((ideasList) => {
            this.setState({ ideas: ideasList });
        });
      }).catch((error) => {
        console.log('Error occurred', error);
      });
  }

  componentDidMount() {
      this.getIdeasList();
  }
  
  render() {
    return (
      <div className="ideas-list">
        <div className="header">List Of Ideas</div>
        <div className="body">
            {
                this.state.ideas.map((idea) => (
                    <div className="col-sm-12 col-md-8 col-md-offset-2" key={idea.id}>
                        <div className='pa3 bg-black-05 ma3'>
                        <div className="idea-container">
                            <div className='idea-body'>
                            <h3> { idea.title }&nbsp; </h3>
                            <h4><strong>Team Name: </strong>{ idea.team_name }</h4>
                            <p><strong>Idea ID: </strong>{ idea.id }</p>
                            <p><strong>Abstract: </strong>{ idea.abstract }</p>
                            </div>
                            <div className="idea-right">
                            <div className='members-list'> 
                                <div>
                                    <div className='members-list__heading'>Members</div>
                                    <ul>
                                        { 
                                            idea.members.map((member) => (
                                                <li key={member.email}>
                                                { member.name }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    </div>           
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    );
  }
}

export default IdeasList;
