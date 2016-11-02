export default (state = null, action) => {
    switch (action.type) {
        case 'REGION_CHANGE':
            const region = state;
            return region;
        default:
            return state;
    }
}