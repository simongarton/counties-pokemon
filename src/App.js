import React, { Component } from 'react';
import logo from './static/pokemon.jpeg';
import './App.css';

class App extends Component {
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
      console.log(item);
      const pokemon = {
        name: item['name'],
        pageUrl: item['url'],
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Pokedex</h1>
          <ul>
            {data.map((value, index) => {
              return (
                <li className="App-list" key={index}>
                  <a className="App-link" href={value['dataUrl']}>
                    {value['fullName']}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
