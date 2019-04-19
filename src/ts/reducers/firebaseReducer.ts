import { AnyAction } from 'redux';
import * as CST from 'ts/common/constants';
import { IFirebaseState } from 'ts/common/types';

export const initialState = {
	[CST.AC_AUTH]: false,
	[CST.AC_RESULT]: [],
	[CST.AC_FOOD]: '',
	[CST.AC_DETAIL]: ''
};

export function firebaseReducer(
	state: IFirebaseState = initialState,
	action: AnyAction
): IFirebaseState {
	console.log(action.type);
	switch (action.type) {
		case CST.AC_AUTH:
			return action[CST.AC_AUTH]
				? Object.assign({}, state, { [CST.AC_AUTH]: action[CST.AC_AUTH] })
				: initialState;
		case CST.AC_RESULT:
			console.log(action[CST.AC_RESULT])
			console.log('[[[[[[[[[[[[[');
			return action[CST.AC_RESULT]
				? Object.assign({}, state, { [CST.AC_RESULT]: action[CST.AC_RESULT] })
				: initialState;
		case CST.AC_FOOD:
			return action[CST.AC_FOOD]
				? Object.assign({}, state, { [CST.AC_FOOD]: action[CST.AC_FOOD] })
				: initialState;
		case CST.AC_DETAIL: 
			return action[CST.AC_DETAIL]
				? Object.assign({}, state, { [CST.AC_DETAIL]: action[CST.AC_DETAIL] })
				: initialState;
		default:
			return state;
	}
}
