import axios from 'axios';


// Get all movies 
export const Fetch_All_Movies = () => {
    return (dispatch) => {
        axios.get("https://localhost:44362/api/movie")
            .then((response) => {
                const movies = Object.keys(response.data).map(key =>
                    response.data[key]
                )
                dispatch({ type: 'FETCH_ALL_MOVIES', payload: movies })
            }).catch((err) => {
                dispatch({ type: 'FETCH_ALL_ERROR', payload: err })
            })
    }
}