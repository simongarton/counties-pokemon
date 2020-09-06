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
    const typeNames = [];
    const types = [];
    this.state.data.types.forEach(function (item, index) {
      typeNames.push(item.type.name);
      types.push({ name: item.type.name, url: item.type.url });
    });
    const typeMessage = 'Types : ' + typeNames.join(', ');
    const spriteFront = this.state.data.sprites.front_shiny;
    const spriteBack = this.state.data.sprites.back_shiny;
    const abilities = [];
    this.state.data.abilities.forEach(function (item, index) {
      abilities.push({ name: item.ability.name, url: item.ability.url });
    });
    return (
      <div className="pokemon">
        {' '}
        <h1 className="pokemon-header">{name}</h1>
        <img src={spriteFront} alt="front view" />
        <img src={spriteBack} alt="back view" />
        <p>Height : {this.state.data.height}</p>
        <p>Weight : {this.state.data.weight}</p>
        <p>Base experience : {this.state.data.base_experience}</p>
        <h3>Types</h3>
        <ul>
          {types.map((value, index) => {
            return <li>{value['name']}</li>;
          })}
        </ul>
        <h3>Abilities</h3>
        <ul>
          {abilities.map((value, index) => {
            return <li>{value['name']}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Pokemon;
