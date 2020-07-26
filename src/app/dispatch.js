import axios from 'axios';


// Get all movies 
export const Fetch_All_Movies = () => {
    return (dispatch) => {
        axios.get("https://localhost:44362/api/movie")
            .then((response) => {
                dispatch({ type: 'FETCH_ALL_MOVIES', payload: response.data })
            }).catch((err) => {
                dispatch({ type: 'FETCH_ALL_ERROR', payload: err })
            })
    }
}