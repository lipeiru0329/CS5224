import { Layout } from 'antd';
import { Table } from 'antd';
// import { Input } from 'antd';
// import { Carousel } from 'antd';
import * as React from 'react';
import { SCard, SCardTitle } from './_styled';
import { Link } from 'react-router-dom';

const { Column } = Table;

interface IProps {
	data: any;
	food: any;
	updateDetail: (data: any) => any;
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

	private showingDetail = (data: any) => {
		this.props.updateDetail(data);
		// console.log(data);
	};

	public render() {
		const { food, data } = this.props;
		const dataFood = [];
		if (data.length > 0 && (data as any).split(',') && (data as any).split(',').length > 0) {
			const index = (data as any).split(',');
			for (let i = 0; i < index.length / 6; i++) {
				dataFood.push(
					{
						key: i,
						ranking: i + 1,
						name: food,
						address: index[i * 6 + 2] + ' ' + index[i * 6 + 3]
					}
				);
			}
		}

		return (
			<Layout style={{ background: 'white' }}>

				<SCard
					title={<SCardTitle style={{ color: 'white' }}>Recipe Insight: Cooking Make Easy</SCardTitle>}
					style={{
						height: 'auto',
						width: 800,
						background: 'white',
						border: '2px solid #e8e8e8f0',
						borderRadius: 10,
					}}
				>

					<Table
						dataSource={dataFood}
						pagination={{
							showSizeChanger: true,
							pageSize: 10,
							pageSizeOptions: ['10', '20', '50'],
							size: 'small'
						}}
						style={{
							width: '1160px',
							margin: 0
						}}
					>
						<Column
							title={"ranking"}
							dataIndex={"ranking"}
						// width={'20'}
						/>
						<Column
							title={"name"}
							dataIndex={"name"}
						// width={'20'}
						/>
						<Column
							title={"address"}
							dataIndex={"address"}
							// width={'20'}
							render={index => (
								<span>
									<Link to={'/query'}>
										<button
											className="form-button"
											style={{ width: '40%', borderColor: 'rgba(0, 0, 0, 0.4)', color: 'rgba(12, 12, 12, 0.6)' }}
											onClick={() => this.showingDetail(index)}
										>
											{index}
										</button>
									</Link>
								</span>
							)}
						/>
					</Table>

				</SCard>
			</Layout>
		);
	}
}

