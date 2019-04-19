import { Layout } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
// import { Carousel } from 'antd';
// import logo from 'images/logo.png';
import * as React from 'react';
import ImageUploader from 'react-images-upload';
import { SDivFlexCenter } from '../_styled';
import { SButton, SCard, SCardList, SCardTitle } from './_styled';
// import axios from 'axios'
import request from 'request';

// const Datauri = require('datauri');
// const datauri = new Datauri();
// const path = require('path');
// import * as firebaseAction from '../../actions/firebaseActions';

const { TextArea } = Input;

interface IProps {
	resultUpdating: (result: any[]) => any;
	foodUpdating: (result: string) => any;
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
	target: string;
	imageShow: boolean;
	base64: any;
}

export default class ReportAddress extends React.Component<IProps, IState> {
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
			toAddreses: '0x0',
			target: '',
			imageShow: false,
			base64: ''
		};
	}
	
	private handleTextChange = (e: any) => {
		this.setState({
			text: e.target.value,
			target: e.target.value
		});
	};

	private pushToSearch = (la: number, lo: number, target: string) => {

		console.log("push to Lambda");
		request.post('https://6rnv1kh7nj.execute-api.ap-southeast-1.amazonaws.com/default/analysis', {
			json: {
				"food_name": target,
				"user_location": la + "," + lo,
				// "1.283318,103.860580",
				"preference_1": "time",
				"preference_2": "rating",
				"preference_3": "cost"
			}
		}, (error, res, body) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(body);
			console.log(res);
			this.props.resultUpdating(body);
		});
	}

	private handleSubmitPicture = () => {
		const {base64} = this.state;
		let targetFood = '';

		request.post('https://tuvi9unyt5.execute-api.ap-southeast-1.amazonaws.com/default/init', {
        json: {
            "num_tag": '10',
            "api_key": '6a2ebd598b6699a1ec4500341ae93134893b28b7',
            "image_url": base64
        }
    }, (error, res, body) => {
        if (error) {
			console.log(error);
			return;
		}
		console.log(body);
		targetFood = body;
		navigator.geolocation.getCurrentPosition((position) => {
			this.pushToSearch(position.coords.latitude, position.coords.longitude, targetFood);
		  });
		console.log(res);
	})

		// if (targetFood !== '') {
			
		// }
	}

	private onDrop = (pictureFiles: any) => {
		// console.log(pictureFiles);
		// console.log(typeof pictureFiles);
		// console.log(pictureFiles[0].src);
		// console.log(pictureDataURLs);
		// console.log(this.state.pictures.concat(pictureFiles));
		const base64 = (document.getElementsByClassName('uploadPicture')[0] as any).src;
		console.log(base64);
		// datauri.format(path.extname(req.file.originalname), req.file.buffer);	

		this.setState({
			pictures: this.state.pictures.concat(pictureFiles),
			base64: base64
		});
	};
	
	private handleSubmit = () => {
		
		const { target } = this.state;

		console.log(target);
		this.props.foodUpdating(target);

		navigator.geolocation.getCurrentPosition((position) => {
			this.pushToSearch(position.coords.latitude, position.coords.longitude, target);
		});
		// console.log(res);


		// var instance = axios.create({
		// 	baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
		// 	timeout: 1000,
		// 	headers: { 'X-RapidAPI-Key': 'ebb119a2dcmsh9d2f22227d82afbp12d82bjsndd8276bcf519' }
		// });

		
		// instance.get(`/search?number=10&query=${this.state.target}`, {
		// 	timeout: 5000
		// }).then(response => {
		// 	console.log(response);
		// 	this.props.resultUpdating(response.data.results);
		// });
	};

	public render() {
		return (
			<Layout>
				{/* <img src={logo} style={{
					"width": "auto",
					"padding": 100,
					"height": "auto"
				}} /> */}
				<SCard
					title={<SCardTitle style={{ color: 'white' }}>Recipe Insight: Cooking Make Easy</SCardTitle>}
					style={{
						height: 'auto',
						width: 1200,
						border: '2px solid #e8e8e8f0',
						borderRadius: 10,
						background: '#52c718f2'
					}}
				>
					<SDivFlexCenter horizontal padding="0 10px" style={{ marginTop: 10 }}>
						<SCardList>

							<div style={{ display: 'flex' }}>

								<TextArea
									rows={4}
									disabled={this.state.imageShow}
									placeholder="Please type in your searching name"
									onChange={(e: any) => this.handleTextChange(e)}
									style={{ height: 30 }}
								/>

								<SButton
									style={{ marginLeft: 10 }}
									// style={{ opacity: Number(text && address) === 0 ? 0.3 : 1 }}
									width="24%"
									onClick={this.handleSubmit}
								>
									<Link to={'/result'}>
										Submit
									</Link>
								</SButton>

								<SButton
									style={{ marginLeft: 10 }}
									onClick={() =>
										this.setState({
											imageShow: !this.state.imageShow
										})
									}
									width="24%"
								>
									{!this.state.imageShow ? 'Search By Picture' : 'Hidden'}
								</SButton>
							</div>

							{this.state.imageShow ? ([

								<ImageUploader
									withIcon={true}
									buttonText="Upload your image"
									onChange={(e: any) => this.onDrop(e)}
									imgExtension={['.jpg', '.gif', '.png']}
									maxFileSize={5242880}
									withPreview={true}
									label={'accepted: jpg, gif, png'}
									style={{ width: 'auto' }}
								/>,

								<SButton
									style={{ marginLeft: 10 }}
									// style={{ opacity: Number(text && address) === 0 ? 0.3 : 1 }}
									width="24%"
									onClick={this.handleSubmitPicture}
								>
									<Link to={'/query'}>
										Submit Picture
									</Link>
								</SButton>
							]) : ''}


							{/* <SDivFlexCenter horizontal width="100%" padding="10px">
								<SButton
									onClick={() =>
										this.setState({
											address: '',
											pictures: []
										})
									}
									width="49%"
								>
									Reset
								</SButton>

							</SDivFlexCenter> */}

						</SCardList>
					</SDivFlexCenter>
				</SCard>
			</Layout>
		);
	}
}
