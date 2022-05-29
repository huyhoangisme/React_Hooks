import actionTypes from '../actions/actionTypes';



const initialState = {
    started: true,
    language: 'vi',
    systemMenuPath: '',

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_START_UP_COMPLETE:
            return {
                ...state,
                started: true
            }
        case actionTypes.SET_CONTENT_OF_CONFIRM_MODAL:
            return {
                ...state
            }
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.language,
            }
        default:
            return state;
    }
}

export default appReducer;