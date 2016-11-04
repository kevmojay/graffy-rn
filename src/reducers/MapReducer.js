import { CREATE_POST_FORM, REGION_CHANGE } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case 'REGION_CHANGE':
            const region = state;
            return region;
        case 'CREATE_POST_FORM':
            return { ...state, [action.payload.prop]: action.payload.value}
        default:
            return state;
    }
}