// import { Input } from 'antd';
// import { Carousel } from 'antd';
import * as React from 'react';
// var googleMapsClient = require('@google/maps').createClient({
// 	key: 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw'
// });

interface IProps {
	lat: number;
	lng: number; 
	text: string
}



export default class ResultCard extends React.Component<IProps, {}> {

	public render() {

		const { lat, lng, text } = this.props;
		return (
			<div>{lat} {lng} {text}</div>
		);
	}
}