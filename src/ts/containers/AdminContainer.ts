import { connect } from 'react-redux';
import { IState } from 'ts/common/types';
import Admin from 'ts/components/Admin';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state: IState) {
	return {
		signedIn: state.firebase.auth
	};
}

export default withRouter(connect(
	mapStateToProps,
	{}
)(Admin) as any);