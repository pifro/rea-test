import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) =>
<div className="App">
  <Header />
  <Search />
</div>

const Header = (props) =>
<div className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>Rea v0</h2>
</div>

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText : ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ResultList result={this.state.filterText} />
      </div>
    )
  }
}


class SearchBar extends Component {
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}

handleChange() {
  this.props.onUserInput(
    this.refs.filterTextInput.value
  );
}

render() {
  return (
    <form className="blocky">
      <label>What is it you want ? </label>
      <input
        type="text" placeholder="Search ..."
        value={this.props.filterText}
        ref="filterTextInput"
        onChange={this.handleChange}
      />
      <input type="text" ref="keykey"/>
      <input type="submit"/>
    </form>
    );
  }
}


const ResultList = (props) =>
<div className="blocky">
<p> RETURN RESULTS HERE / {props.result}</p>
</div>

const ResultItem = (props) =>
<li>Result</li>



export default App;
