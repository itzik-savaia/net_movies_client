const initialState = {
    Movies_Reducer: [],
    loading: false,
    success: false,
    error: {},
}

export function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_MOVIES':
            return {
                ...state,
                Movies_Reducer: state.Movies_Reducer = action.payload,
                loading: state.loading = true,
                success: state.success = true,
            };
        case "FETCH_ALL_MOVIES_Error":
            return {
                ...state,
                error: state.error = action.payload
            }
        default:
            return state;
    }
}