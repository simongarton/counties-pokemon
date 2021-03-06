## Counties Power : Pokedex front end (Technical Test)

A very simple front end, intended to display details of the first 150 Pokemon, using the standard [PokeApi](https://pokeapi.co/).

Simon Garton  
**simon.garton@gmail.com**  
September 6, 2020

## Building and running the application

To build this application, start the terminal, move into the root directory, and type :

```
yarn start
```

This should open up your local browser with the [demo](http://localhost:3000/)

## Live demo

A live demo is available on [here](https://counties-c84ea.web.app/), hosted on Firebase.

As required, if you know the name of a Pokemon, you can go directly to it : e.g. [Pikachu](https://counties-c84ea.web.app/pikachu)

## Discussion points

Commit 0ab03c915c9e0c2b741a6c2f5f99813f018359c8 "Code review, cleanup." is the basic app as expected by the test.
I then added some extra stuff to make it prettier - sprite images and some more stats. Next steps would be to consider the other information available in the API - it's quite detailed ! - and possibly set up more links; the application as it stands is reasonably responsive, but could be improved, especially if I structured the information into 'cards' or something similar.

![Pokedex](pokedex.png 'Pokedex')
![Caterpie](caterpie.png 'Caterpie')
