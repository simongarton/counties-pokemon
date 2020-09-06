import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.pokemon,
      data: null,
      encounters: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.id)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  fetchEncounters() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.id + '/encounters')
      .then((response) => response.json())
      .then((encounters) => this.setState({ encounters }));
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="pokemon-container">
          <h1 className="pokemon-header">Gotta catch this one first ...</h1>
        </div>
      );
    }
    const name = this.state.data.name.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    console.log(this.state.data);
    const types = this.state.data.types;
    return (
      <div className="pokemon">
        {' '}
        <h1 className="pokemon-header">{name}</h1>
        <ul>
          {types.map((value, index) => {
            return (
              <li className="pokemon-list" key={index}>
                {value.type.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Pokemon;
