import React, { Component } from 'react';
import './IdeasList.css';

class IdeasList extends Component {
  state = {
      ideas: [
          {
              id: 1,
              name: 'Idea1',
              abstract: 'Hello this is my idea',
              members: [
                  {
                      role: 'leader',
                      name: 'Rahat Khanna',
                      email: 'rahat.khanna@apple.com'
                  }
              ]
          },
          {
            id: 2,
            name: 'Idea2',
            abstract: 'Hello this is my idea',
            members: [
                {
                    role: 'leader',
                    name: 'ABC',
                    email: 'abc@apple.com'
                }
            ]
        },
        {
            id: 3,
            name: 'Idea3',
            abstract: 'Hello this is my idea',
            members: [
                {
                    role: 'leader',
                    name: 'XYZ',
                    email: 'xyz@apple.com'
                }
            ]
        }
      ]
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
