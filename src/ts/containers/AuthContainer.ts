import { connect } from 'react-redux';
import { IState } from 'ts/common/types';
import AuthCard from 'ts/components/Cards/AuthCard';
import { withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as firebaseActions from 'ts/actions/firebaseActions';


function mapStateToProps(state: IState) {
	return {
		data: state.firebase.Result
	};
}

function mapDispatchToProps(dispatch: ThunkDispatch<IState, undefined, AnyAction>) {
	return {
		resultUpdating: (result: any[]) => dispatch(firebaseActions.resultUpdating(result)),
		foodUpdating: (result: any[]) => dispatch(firebaseActions.foodUpdating(result)),
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthCard as any) as any);