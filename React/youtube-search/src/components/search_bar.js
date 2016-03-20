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
			<input 
			value={this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />			
		</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
