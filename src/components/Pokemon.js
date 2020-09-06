import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.match.params.pokemon,
      data: null,
      encounters: null,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.name)
      .then((response) => response.json())
      .catch((error) => this.setState({ error }))
      .then((data) => this.setState({ data }))
      .catch((error) => console.log('b ' + error));
  }

  render() {
    if (this.state.error) {
      return (
        <div className="pokemon">
          <h1 className="pokemon-header">Sorry, can't catch that Pokemon ...</h1>
        </div>
      );
    }

    if (!this.state.data) {
      return (
        <div className="pokemon">
          <h1 className="pokemon-header">Gotta catch this one first ...</h1>
        </div>
      );
    }

    const name = this.state.data.name.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    const types = [];
    this.state.data.types.forEach(function (item, index) {
      types.push(item.type.name);
    });
    const typeMessage = 'Types : ' + types.join(', ');

    return (
      <div className="pokemon">
        {' '}
        <h1 className="pokemon-header">{name}</h1>
        <p className="pokemon-types">{typeMessage}</p>
      </div>
    );
  }
}

export default Pokemon;
