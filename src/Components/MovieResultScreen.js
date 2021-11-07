import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../actions/fetMovieActions';
import MovieListScreen from './MovieListScreen';
import Loader from './Loader';
import { Grid } from '@mui/material';
import Message from './Message';

const MovieScreen = () => {
	const dispatch = useDispatch();
	const movieLists = useSelector((state) => state.movieList);
	const { loading, error, movies } = movieLists;

	useEffect(() => {
		dispatch(fetchMoviesAction());
	}, [dispatch]);

	return (
		<React.Fragment>
			{loading ? (
				<Loader />
			) : movies ? (
				<Grid container spacing={2}>
					{movies.map((movie) => (
						<MovieListScreen movie={movie} key={movie.ID} />
					))}
				</Grid>
			) : (
				<Message>{error}</Message>
			)}
		</React.Fragment>
	);
};

export default MovieScreen;
