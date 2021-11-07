import {
	FETCH_MOVIE_REQUEST,
	FETCH_MOVIE_SUCCESS,
	FETCH_MOVIE_FAILURE,
} from '../constants/fetchMovieConstants';

export const fetchMovieReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOVIE_REQUEST:
			return { loading: true };
		case FETCH_MOVIE_SUCCESS:
			return { loading: false, movies: action.payload };
		case FETCH_MOVIE_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
