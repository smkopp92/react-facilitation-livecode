import React from 'react';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(name) {
    this.setState( {selected: name} )
  }

  render() {
    let messageDiv;

    if(this.state.selected != ""){
      messageDiv = <h1>Your starter pokemon is...{ this.state.selected }!~!:)</h1>
    }

    return(
      <div>
        <h1>Pokemon List</h1>

        { messageDiv }

        <ul>
          <Pokemon name="Bulbasaur" handleClick={this.handleSelect}/>
          <Pokemon name="Charmander" handleClick={this.handleSelect}/>
          <Pokemon name="Squirtle" handleClick={this.handleSelect}/>
        </ul>
      </div>
    );
  }
};

export default App;
