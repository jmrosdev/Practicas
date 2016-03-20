import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API = 'AIzaSyBsOmC_uoGcD7VluZtl48ALR0x6HuBBaB0';



class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null		
		};
		this.videoSearch('');
	}


	videoSearch(term){
		YTSearch({key: API, term: term}, (videos) => {
			/*Coge los datos de los videos y la setea a props, que es el encargado
			de hacer viajar los datos por la app */
			this.setState({
				videos : videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
				videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector('.container')); 