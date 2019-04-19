import * as CST from 'ts/common/constants';
import { VoidThunkAction } from 'ts/common/types';

export function authUpdate(signedIn: boolean) {
	return {
		type: CST.AC_AUTH,
		[CST.AC_AUTH]: signedIn
	};
}

export function updateResult(result: any[]): VoidThunkAction {
	console.log(result);
	console.log(';;;;;;;;;;;;;;;');
	return async dispatch => {
		dispatch(resultUpdating(result));
	};
}

export function updateDetail(data: any) {
	return {
		type: CST.AC_DETAIL,
		[CST.AC_DETAIL]: data
	};
}

export function resultUpdating(result: any[]) {
	return {
		type: CST.AC_RESULT,
		[CST.AC_RESULT]: result
	};
}

export function foodUpdating(result: any) {
	return {
		type: CST.AC_FOOD,
		[CST.AC_FOOD]: result
	};
}
