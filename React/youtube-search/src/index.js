import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API = 'AIzaSyBsOmC_uoGcD7VluZtl48ALR0x6HuBBaB0';



class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: []};

		YTSearch({key: API, term: 'surfboards'}, (data) => {
			/*Coge los datos de los videos y la setea a props, que es el encargado
			de hacer viajar los datos por la app */
			this.setState({videos:data});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));

 