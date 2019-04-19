import { connect } from 'react-redux';
import { IState } from 'ts/common/types';
import ResultCard from 'ts/components/Cards/ResultCard';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state: IState) {
	return {
		data: state.firebase.Result,
		food: state.firebase.Food,
		detail: state.firebase.Detail
	};
}

export default withRouter(connect(
	mapStateToProps,
	{}
)(ResultCard) as any);