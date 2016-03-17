import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		/*key=video.etag lo utilizamos para crear un id unico y lo cogemos del id del video.
		Eso lo miramos en la consola, pestaña network, archivo search?part...
		*/
		return <VideoListItem key={video.etag} video={video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;