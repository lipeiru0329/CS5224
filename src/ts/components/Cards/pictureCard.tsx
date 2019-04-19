// import { PageHeader, Typography } from 'antd';

// const { Paragraph } = Typography;


// interface IProps {
// 	// resultUpdating: (result: any[]) => any;
// }

// interface IState {
// 	address: string;
// 	pictures: any;
// 	text: string;
// 	chain: string;
// 	queryAddress: string;
// 	approve: number;
// 	amount: number;
// 	toAddreses: string;
// 	target: string;
// 	imageShow: boolean;
// }


// export default class ReportAddress extends React.Component<IProps, IState> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			address: '',
// 			text: '',
// 			pictures: [],
// 			chain: '',
// 			queryAddress: '',
// 			approve: 0,
// 			amount: 0,
// 			toAddreses: '0x0',
// 			target: '',
// 			imageShow: false
// 		};
// 	}

// 	private handleTextChange = (e: any) => {
// 		this.setState({ text: e.target.value, target: e.target.value });
// 	};

// 	private onDrop = (pictureFiles: any, pictureDataURLs: any) => {
// 		console.log(pictureFiles);
// 		console.log(typeof pictureFiles);
// 		console.log(pictureFiles[0].src);
// 		console.log(pictureDataURLs);
// 		console.log(this.state.pictures.concat(pictureFiles));
// 		// datauri.format(path.extname(req.file.originalname), req.file.buffer);	

// 		this.setState({
// 			pictures: this.state.pictures.concat(pictureFiles)
// 		});
// 	};

// 	private handleSubmit = () => {
// 		// const { chain } = this.state;
// 		// const { text, address, target } = this.state;
// 		// console.log(target);
// 		// console.log(text);
// 		// console.log({
// 		// 	address: address,
// 		// 	description: text,
// 		// 	link: 'a',
// 		// 	twitter: 'a',
// 		// 	chain: chain
// 		// });

// 		// var instance = axios.create({
// 		// 	baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
// 		// 	timeout: 1000,
// 		// 	headers: { 'X-RapidAPI-Key': 'ebb119a2dcmsh9d2f22227d82afbp12d82bjsndd8276bcf519' }
// 		// });


// 		// instance.get(`/search?number=10&query=${this.state.target}`, {
// 		// 	timeout: 5000
// 		// }).then(response => {
// 		// 	console.log(response);
// 		// 	this.props.resultUpdating(response.data.results);
// 		// });
// 	};


// 	public render() {

// 		const Description = (term: any, children: any, span = 12 ) => (
// 			<Col span={span}>
// 				<div className="description">
// 					<div className="term">{term}</div>
// 					<div className="detail">{children}</div>
// 				</div>
// 			</Col>
// 		);

// 		const content = (
// 			<Row>
// 				<Description term="Created">Lili Qu</Description>
// 				<Description term="Association">
// 					<a>421421</a>
// 				</Description>
// 				<Description term="Creation Time">2017-01-10</Description>
// 				<Description term="Effective Time">2017-10-10</Description>
// 				<Description term="Remarks" span={24}>
// 					Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
// 			  </Description>
// 			</Row>
// 		);

// 		const extraContent = (
// 			<Row>
// 				<Col span={12}>
// 					<Statistic title="Status" value="Pending" />
// 				</Col>
// 				<Col span={12}>
// 					<Statistic title="Price" prefix="$" value={568.08} />
// 				</Col>
// 			</Row>
// 		);

// 		return (
// 			<Layout>
// 				<PageHeader
// 					onBack={() => window.history.back()}
// 					title="Title"
// 					subTitle="This is a subtitle"
// 					tags={<Tag color="red">Warning</Tag>}
// 					extra={[
// 						<Button key="3">Operation</Button>,
// 						<Button key="2">Operation</Button>,
// 						<Button key="1" type="primary">
// 							Primary
//       					</Button>,
// 					]}
// 					footer={
// 						<Tabs defaultActiveKey="1">
// 							<TabPane tab="Details" key="1" />
// 							<TabPane tab="Rule" key="2" />
// 						</Tabs>
// 					}
// 				>
// 					<div className="wrap">
// 						<div className="content padding">{content}</div>
// 						<div className="extraContent">{extraContent}</div>
// 					</div>
// 				</PageHeader>
// 			</Layout>
// 		);
// 	}
// }
