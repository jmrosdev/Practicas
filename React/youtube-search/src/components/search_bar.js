import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		/*Estado. Es un valor que se puede modificar, aqui en el constructor lo inicializamos a vacio 
		para posteriormente utilizarlo*/
		this.state = { term: ''  };

	}
	render(){
		return (
		<div>
			<input onChange={event => this.setState({term: event.target.value})} />			
		</div>
		);
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
}

export default SearchBar;
