import { Fetch_All_Movies } from '../dispatch';

const initialState = {
    data: [],
    Terror: [],
    Action: [],
}


export const MoviesReducer = (state = initialState, action) => {
    if (Fetch_All_Movies)
        if (action)
            return { ...state.data = action.payload }
}

export const TypesReducer = (state = initialState, action) => {
    if (Fetch_All_Movies) {
        if (action.payload != null) {
            action.payload.forEach(e => {
                e.types.forEach(element => {
                    if (element === "Action") {
                        return { ...initialState.Action = e };
                    }
                });
            });
        }
    }
}
