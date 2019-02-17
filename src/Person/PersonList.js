import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul className="person-list">
        { this.state.persons.map(person => <li className="person-list-item" key={person.id}>{person.name}</li>)}
      </ul>
    )
  }
}