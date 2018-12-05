import { REPORTS,
		 LOADING } from './Actions';

const initialState = {
    loading: false,
    reports: {}
};


export default function config(state=initialState, action){

	switch(action.type){
		case REPORTS:
			return Object.assign({}, state, {reports: action.data});
        case LOADING:
            return Object.assign({}, state, {loading: action.data});
	}

    return state;
}