import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	/*Por parametros pasamos props, pero podemos pasar {video} y sería lo mismo que const video = props.video. Sintaxis de ESCMA16*/

	// const video = props.video;
	const imgUrl = video.snippet.thumbnails.default.url;
	// const videoSelect = props.onVideoSelect;
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="media-left">
				<img className="media-object" src={imgUrl}/>
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</li>
	);
};

export default VideoListItem;