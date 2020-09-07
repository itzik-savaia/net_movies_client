import axios from 'axios';

// // Get all movies 
export const Fetch_All_Movies = () => {
    return (dispatch) => {
        axios.get("https://net-movies-server.herokuapp.com/api/movie")
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: 'FETCH_ALL_MOVIES',
                        payload: response.data
                    })
                } else {
                    dispatch({
                        type: 'Fetch_All_Movies_Error',
                        payload: response
                    })
                }
                if (response.status === 404) {
                    dispatch({
                        type: 'Fetch_All_Movies_Error',
                        payload: response
                    })
                }
            })
    }
}
// // Get all movies in categorys 
export const Fetch_All_Movies_In_Categorys = () => {
    return (dispatch) => {
        axios.get("https://net-movies-server.herokuapp.com/api/movie/categorys")
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: 'Fetch_All_Movies_In_Categorys',
                        payload: response.data
                    })
                } else {
                    dispatch({
                        type: 'Fetch_All_Movies_In_Categorys_Error',
                        payload: response
                    })
                }
                if (response.status === 404) {
                    dispatch({
                        type: 'Fetch_All_Movies_In_Categorys_Error',
                        payload: response
                    })
                }

            })
    }
}