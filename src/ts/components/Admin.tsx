import { Layout } from 'antd';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SContent } from './_styled';
import AuthCard from '../containers/AuthContainer';
import DetailContainer from '../containers/DetailContainer';
import ResultContainer from '../containers/ResultContainer';

// import PictureCard from '../pictureCard';
export interface IAdminProps {
	signedIn: boolean;
}

export default class Admin extends React.PureComponent<IAdminProps> {
	constructor(props: IAdminProps) {
		super(props);
	}
	public render() {
		return (
			<Layout>

				{/* <Header /> */}
				<SContent>
					<Switch>
						<Route path={'/result'} render={() => <DetailContainer />} />
						<Route path={'/query'} render={() => <ResultContainer />} />
						<Route path={'/verifier'} render={() => <AuthCard />} />
						{/* <Route path={'/picture'} render={() => <PictureCard />} */}
						<Route render={() => <AuthCard />} />
					</Switch>
					{/* <Switch>
						<Route path={'/query'} render={() => <ScamCard />} />
						<Route render={() => <ReportAddress userId={userId} />} />
					</Switch> */}
				</SContent>
			</Layout>

		);
	}
}
