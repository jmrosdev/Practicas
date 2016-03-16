import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = { term: ''  };

	}
	render(){
		return (
		<div>
			<input onChange={event => this.setState({term: event.target.value})} />
			<p>valor del input {this.state.term}</p>
		</div>
		);
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
}

export default SearchBar;
