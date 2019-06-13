import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
  constructor() {
    super()
    this.state = {
      searchfield: '',
      sources: []
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(data => this.setState({sources: Object.keys(data)}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  onSourceChange = (event) => {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => this.setState({sources: data.results}));
  }

  render() {
    const {searchfield, sources} = this.state;
    const filteredSource = sources.filter(source => {
      return source.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !sources.length ?
      <h1 className='tc yellow'>Loading</h1> :
      (
        <div className='tc'>
          <h1>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png' height="200"/>
          </h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList sources={filteredSource}/>
          </Scroll>
        </div>
      )
  }
}

export default App;
