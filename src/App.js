import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person.js';
import PersonList from './Person/PersonList.js';
import PersonListForm from './Person/PersonListForm.js';
import PersonListDelete from './Person/PersonListDelete.js';
import SimplePerson from './Person/SimplePerson.js';

class App extends Component {
  state = {
    persons: [
      {
        id: '11', name: 'laksh', skill: 'web'
      },
      { 
        id: '22', name: 'krish', skill: 'web, data'
      }
    ],
    otherState: 'some val',
    personDynamic: [
      {
        name: 'd', skill: 'dskill'
      }
    ],
    showPersons: false
  }

  switchHandler = (newName) => {
    // console.log('click');
    // this.state.persons[0].name = 'lakshmanan';
    this.setState({
      persons: [
        {
          id: 1, name: newName, skill: 'web'
        },
        { 
          id: 2, name: 'krishna', skill: 'web, data'
        }
      ]
    })
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((item) => {
      return item.id === personId;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({ persons: persons })
  }

  toggleHanlder = (event) => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons});
  }

  deleteHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let personDynamic = null;
    if (this.state.showPersons) {
      personDynamic = (
        <div>
          <Person name={this.state.personDynamic[0].name} skill={this.state.personDynamic[0].skill} />
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'white'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>React app</h1>
          <h2>Person list</h2>
          <PersonList /><br/>
          <PersonListForm /><br/>
          <PersonListDelete />
          <h3>Simple person</h3>
          <SimplePerson first_name='laksh' last_name='m' />
          <p className={classes.join(' ')}>Some text</p>
          { this.state.showPersons ?
          <div>
            List
            {
              this.state.persons.map((person, index) => {
                return (
                <div>
                  {person.id}
                  <Person click={this.deleteHandler.bind(this, index)} changed={(e) => this.nameChangedHandler(e, person.id)} key={person.id} name={person.name} skill={person.skill}>Mid content 1</Person>
                </div>
              )
              })
            }
          </div> : null
          }
          <button style={style} onClick={this.toggleHanlder}>Toggle content</button>
          <button onClick={this.switchHandler.bind(this, 'swith newname')} className="btn">Switch</button>
          {personDynamic}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is heading'));
  }
}

export default Radium(App);
