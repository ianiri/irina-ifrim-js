import React from 'react';
import axios from 'axios';
import './App.css';



export default class App extends React.Component {
  url = 'http://localhost:8080/persons';

  state = {
    nameInputValue: '',
    skillInputValue: '',
    persons: [],
    skills: []
  };

  handleNameChange = (event) => {
    this.setState({
      nameInputValue: event.target.value
    });
  };
  
  handleSkillChange = (event) => {
    this.setState({
      skillInputValue: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let name = this.state.nameInputValue;

    if (name.length < 1) {
      return;
    }

    let requestBody = {
      person: {
        name: name,
        skills: this.state.skills,
      }
    };

    axios.post(this.url, requestBody).then((result) => {
      if (result.data.success === true) {
        this.buildPersonList();
        this.setState({
          skills: []
        });
      }
    });
  };

  addSkill = (event) => {
    if (this.state.skillInputValue.length < 1) {
      return;
    }

    this.setState({
      skills: [...this.state.skills, this.state.skillInputValue]
    });

    event.target.previousElementSibling.value = '';
  };

  buildPersonList = () => {
    axios.get(this.url).then((result) => {
      this.setState({
        persons: result.data.persons
      });
    });
  };

  componentDidMount = () => {
    this.buildPersonList();
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Nume" onChange={this.handleNameChange}/>
          </div>
          <br/>
          <div>
            <input type="text" name="skill" placeholder="Skill" onChange={this.handleSkillChange} />
            <button type="button" onClick={this.addSkill}>Add</button>
          </div>

          {this.state.skills.length > 0 && (
          <ul>
            {this.state.skills.map((skill) => {
              return <li>{skill}</li>
            })}
          </ul>
          )}
          <br/>
          <div>
            <button type="submit">Trimite</button>
          </div>
        </form>
        {this.state.persons.length > 0 && (
          <ul>
            {this.state.persons.map((person) => {
              return (
                <li>
                  {person.name}
                  {person.skills.length > 0 && (
                    <ul>
                      {person.skills.map((skill) => {
                        return <li>{skill}</li>
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    );
  }
};
