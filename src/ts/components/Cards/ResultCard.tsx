import { Layout, Spin } from 'antd';
// import { Input } from 'antd';
// import { Carousel } from 'antd';
import * as React from 'react';
import { Card, Col, Row } from 'antd';
import { SCard, SCardTitle } from './_styled';
import { SDivFlexCenter } from '../_styled';
// import GoogleMapReact from 'google-map-react'
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps'

// import CurrentLocation from './Map';
// import {Map, InfoWindow, Marker, GoogleApiWrapper, GoogleMap} from 'google-maps-react';

// import AnyReactComponent from './AnyReactComponent';
// var googleMapsClient = require('@google/maps').createClient({
// 	key: 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw'
// });

const { Meta } = Card;

interface IProps {
	data: any;
	food: any;
	detail: any;
}

interface IState {
	address: string;
	pictures: any;
	text: string;
	chain: string;
	queryAddress: string;
	approve: number;
	amount: number;
	toAddreses: string;
}



export default class ResultCard extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			address: '',
			text: '',
			pictures: [],
			chain: '',
			queryAddress: '',
			approve: 0,
			amount: 0,
			toAddreses: '0x0'
		};
	}

	// public componentWillMount() {
	// 	const script = document.createElement("script");
	// 	const API = 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw';
	// 	script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=initMap`;
	// 	script.async = true;

	// 	document.body.appendChild(script);
	// };

	// private initMap() {
	// 	const uluru = { lat: -25.363, lng: 131.044 };
	// 	googleMapsClient.geocode({
	// 		address: '1600 Amphitheatre Parkway, Mountain View, CA'
	// 	}, function (err: any, response: any) {
	// 		if (!err) {
	// 			console.log(response.json.results);
	// 		}
	// 	});
	// }


	public render() {
		// const { text } = this.state;
		// const { address } = this.state;
		// console.log('))))))))))))))))))');
		// console.log(this.props.data);

		const { data, food, detail } = this.props;
		console.log(data);
		// const detail = ' "1.332701 103.847445"';
		
		// const center = { lat: 40.12, lng: -79.1 };
		// data.length > 0 && data !== '' ? {lat: parseFloat(data.split(',')[2].split('"')[1]), lng: parseFloat(data.split(',')[3].split('"')[0])} : { lat: 40.12, lng: -79.1 };

		// const zoom = 11;

		let latitude = 0;
		let longitude = 0;

		navigator.geolocation.getCurrentPosition((position) => {
			latitude = position.coords.latitude
			longitude = position.coords.longitude
		});

		const GoogleMapExample = withGoogleMap(() => (
			<GoogleMap
				defaultCenter={{ lat: detail.length > 0  ? parseFloat(detail.split(' ')[1].split('"')[1]) : 0, lng: detail.length > 0  ? Number(parseFloat(detail.split(' ')[2].split('"')[0])) : 0 }}
				defaultZoom={13}
			>
				<Marker
					position={{ lat: detail.length > 0 ? parseFloat(detail.split(' ')[1].split('"')[1]) : 0, lng: detail.length > 0 ? Number(parseFloat(detail.split(' ')[2].split('"')[0])) : 0 }}
				/>
			</GoogleMap>
		));


		const DirectionsComponent = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCqG9_xMZyd1l44bKzieimtDX7vBidhyDM",
				loadingElement: <div style={{ height: `400px` }} />,
				containerElement: <div style={{ width: `100%` }} />,
				mapElement: <div style={{ height: `400px`, width: `400px` }} />,
			}),
			withScriptjs,
			withGoogleMap,
			lifecycle({
				componentDidMount() {
					const DirectionsService = new google.maps.DirectionsService();
					DirectionsService.route({
						origin: new google.maps.LatLng(latitude, longitude),
						destination: new google.maps.LatLng(detail.length > 0 ? parseFloat(detail.split(' ')[1].split('"')[1]) : 0, detail.length > 0 ? Number(parseFloat(detail.split(' ')[2].split('"')[0])) : 0),
						travelMode: google.maps.TravelMode.DRIVING,
					}, (result, status) => {
						if (status === google.maps.DirectionsStatus.OK) {
							this.setState({
								directions: { ...result },
								markers: true
							})
						} else {
							console.error(`error fetching directions ${result}`);
						}
					});
				}
			})
		)((props: any) =>
			<GoogleMap
				defaultZoom={3}
			>
				{props.directions && <DirectionsRenderer directions={props.directions} />}
			</GoogleMap>
		);
		return (
			<Layout>
				<Spin spinning={detail.length === 0} tip="Loading">
					<SCard
						title={<SCardTitle style={{ color: 'white' }}>Recipe Insight: Cooking Make Easy</SCardTitle>}
						style={{
							height: 'auto',
							width: 800,
							border: '2px solid #e8e8e8f0',
							borderRadius: 10,
							background: '#ececec'
						}}
					>
						<SDivFlexCenter horizontal center style={{ background: '#ececec', height: 400 }}>

							<div style={{ background: '#ececec', padding: 30 }}>
								<Row gutter={16}>
									{
										[1].map(() =>
											<Col span={8}>
												<Card
													hoverable
													style={{ width: 400, height: 400 }}
													cover={
														<div style={{ height: 400, width: 400 }}>

															<DirectionsComponent />

															{/* <GoogleMapReact
																bootstrapURLKeys={{ key: 'AIzaSyCqG9_xMZyd1l44bKzieimtDX7vBidhyDM' }}
																defaultCenter={center}
																defaultZoom={zoom}
																yesIWantToUseGoogleMapApiInternals={true}
															>
																<AnyReactComponent
																	lat={data.length > 0 && data !== '' ? parseFloat(data.split(',')[2].split('"')[1]) : 12.121}
																	lng={data.length > 0 && data !== '' ? parseFloat(data.split(',')[3].split('"')[0]) : 12.1212}
																	text="My Marker"
																/>
															</GoogleMapReact> */}
														</div>
													}
												>
													<Meta
														title={food}
														description={
															<div><div>Ready In Minutes: {123}</div>
																<div>Servings: {123}</div></div>}
													// `readyInMinutes: ${e.readyInMinutes}\nservings: ${e.servings}`}
													/>
												</Card>
											</Col>
										)}
								</Row>
							</div>
						</SDivFlexCenter >
						<SDivFlexCenter horizontal center style={{ background: '#ececec' }}>

						<div style={{ marginTop: 200 }}>

							<Row gutter={16}>
								{
									[2].map(() =>
										<Col span={8} style={{ marginLeft: 0 }}>
											<Card
												hoverable
												style={{ width: 400, height: 400 }}
												cover={
													<GoogleMapExample containerElement={<div style={{ height: `400px`, width: '400px' }} />}
																mapElement={<div style={{ height: `100%` }} />} />
												}
											>
												<Meta
													title={food}
													description={
														<div><div>Ready In Minutes: {123}</div>
															<div>Servings: {123}</div></div>}
												// `readyInMinutes: ${e.readyInMinutes}\nservings: ${e.servings}`}
												/>
											</Card>
										</Col>
									)}
							</Row>


						</div>
					</SDivFlexCenter>
						<SDivFlexCenter style={{ background: '#ececec' }}>
							<div style={{ marginTop: 100 }}>
								<Row>
									<SCardTitle style={{ color: '#52c718f2' }}>{food}</SCardTitle>
								</Row>
							</div>
						</SDivFlexCenter>
					</SCard>
				</Spin>
			</Layout>
		);
	}
}