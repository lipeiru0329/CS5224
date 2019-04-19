import { connect } from 'react-redux';
import { IState } from 'ts/common/types';
import DetailCard from 'ts/components/Cards/DetailCard';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as firebaseActions from 'ts/actions/firebaseActions';

function mapStateToProps(state: IState) {
	return {
		data: state.firebase.Result,
		food: state.firebase.Food
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<IState, undefined, AnyAction>) {
	return {
		updateDetail: (result: any[]) => dispatch(firebaseActions.updateDetail(result)),
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailCard) as any);