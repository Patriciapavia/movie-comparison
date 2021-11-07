import axios from 'axios';
import {
	FETCH_MOVIE_REQUEST,
	FETCH_MOVIE_SUCCESS,
	FETCH_MOVIE_FAILURE,
} from '../constants/fetchMovieConstants';
const API_KEYS = process.env.REACT_APP_API_KEY;
export const fetchMoviesAction = () => async (dispatch) => {
	const filmworld = 'filmworld';
	const cinemaworld = 'cinemaworld';
	try {
		dispatch({ type: FETCH_MOVIE_REQUEST });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': `${API_KEYS}`,
			},
		};
		const dataFilmworld = await axios.get(
			`https://challenge.lexicondigital.com.au/api/v2/${filmworld}/movies`,
			config
		);
		const dataCinemaworld = await axios.get(
			`https://challenge.lexicondigital.com.au/api/v2/${cinemaworld}/movies`,
			config
		);
		const moviesFilmworld = dataFilmworld.data.Movies;
		const moviesCinemaworld = dataCinemaworld.data.Movies;

		dispatch({
			type: FETCH_MOVIE_SUCCESS,
			payload: [...moviesCinemaworld, ...moviesFilmworld],
		});
	} catch (error) {
		dispatch({
			type: FETCH_MOVIE_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
