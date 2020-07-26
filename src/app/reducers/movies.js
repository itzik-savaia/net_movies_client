import { Fetch_All_Movies } from '../dispatch';

const initialState = {
    data: []
}


export const MoviesReducer = (state = initialState, action) => {
    if (Fetch_All_Movies) {
        return { ...state.data = action.payload }
    }
}
