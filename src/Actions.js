import request from 'axios';

export const REPORTS = 'REPORTS';
export const LOADING = 'LOADING';

const url = 'http://www.mocky.io/v2/';

export function getReports(){
    return dispatch => { 
        dispatch(setReducer(LOADING, true));
        request.get( url + '59f7760a2f0000ab1d55864e')
        .then( response =>
            { 
                dispatch(setReducer(REPORTS, response.data)); 
                dispatch(setReducer(LOADING, false));
            }
        );
    }
}

function setReducer(type, data){
	return{
		type: type,
		data: data
	}
}