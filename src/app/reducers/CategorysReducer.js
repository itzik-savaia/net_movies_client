const initialState = {
    Movies_Categorys_Reducer: [],
    loading: false,
    success: false,
    error: {},
}

export function CategorysReducer(state = initialState, action) {
    switch (action.type) {
        case 'Fetch_All_Movies_In_Categorys':
            return {
                ...state,
                Movies_Categorys_Reducer: state.Movies_Categorys_Reducer = action.payload,
                loading: state.loading = true,
                success: state.success = true,
            };
        case "Fetch_All_Movies_In_Categorys_Error":
            return {
                ...state,
                error: state.error = action.payload
            }
        default:
            return state;
    }
}