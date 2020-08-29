import { combineReducers } from 'redux';
import { MoviesReducer } from './MoviesReducer';
import { CategorysReducer } from './CategorysReducer';

export default combineReducers({
    MoviesReducer,
    CategorysReducer,
});