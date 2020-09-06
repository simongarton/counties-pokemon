import React, { Component } from 'react';
import logo from '../static/pokemon.jpeg';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  processData(data) {
    const processedData = [];
    data.results.forEach(function (item, index) {
      const pokemon = {
        name: item['name'],
        pageUrl: './' + item['name'],
        dataUrl: item['url'],
        fullName: item['name'].replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }),
      };
      processedData.push(pokemon);
    });
    return processedData;
  }

  render() {
    const data = this.state.data ? this.processData(this.state.data) : [];
    return (
      <div className="container">
        <div className="main">
          <img src={logo} className="main-logo" alt="logo" />
          <h1 className="main-header"> My Pokedex</h1>
        </div>
        <div className="rest">
          <ul>
            {data.map((value, index) => {
              return (
                <li className="main-list" key={index}>
                  <a className="main-link" href={value['pageUrl']}>
                    {value['fullName']}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
