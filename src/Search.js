import React, { Component } from 'react';
import Elasticsearch from 'elasticsearch';
import { Col, Button, Form, FormGroup, Label, Input, FormText,
  InputGroup, InputGroupAddon, Card, CardImg, CardBlock, CardText, CardTitle, CardSubtitle } from 'reactstrap';

var client = new Elasticsearch.Client({host:"http://localhost:9200"})

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText : ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {

    console.log('search for ' + filterText);

    client.search({
      q: filterText
    }).then(function ( body ) {
      console.log('results in');
      this.setState({ results: body.hits.hits })
    }.bind(this), function ( error ) {
      console.trace( error.message );
    });


    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <SearchResults results={this.state.results} />
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
    console.log(this.refs.filterTextInput);
  this.props.onUserInput(

    this.refs.filterTextInput.value
  );
}

render() {
  return (
    <Form>
      <InputGroup><InputGroupAddon> ? </InputGroupAddon>
      <input
        className="form-control"
        type="text" placeholder="What is it you want ?"
        value={this.props.filterText}
        ref="filterTextInput"
        onChange={this.handleChange}
      />
      </InputGroup>

    </Form>
    );
  }
}


class SearchResults extends Component {
	render () {
		return (
			<div className="search_results">

				{ this.props.results.map((result) => {
					return (
            <Col key={ result._id } sm="4">
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBlock>
              <CardTitle>{ result._source.name }</CardTitle>
              <CardSubtitle>ID #{ result._id }</CardSubtitle>
              <CardText>Blablabla</CardText>
              </CardBlock>
            </Card>
            </Col>
          )
        }) }

			</div>
		)
	}
}

SearchResults.defaultProps = {results: []};

export default Search;
