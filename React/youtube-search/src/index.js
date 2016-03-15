import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API = 'AIzaSyBsOmC_uoGcD7VluZtl48ALR0x6HuBBaB0';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));

 