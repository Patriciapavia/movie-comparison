import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../../actions/fetMovieActions';
import MovieListScreen from '../MovieLists/MovieListScreen';
import Loader from '../Loader';
import Message from '../Message';
import './MovieResultScreen.css';
const MovieResultScreen = () => {
	const dispatch = useDispatch();
	const movieLists = useSelector((state) => state.movieList);
	const { loading, error, movies } = movieLists;

	useEffect(() => {
		dispatch(fetchMoviesAction());
	}, [dispatch]);

	return (
		<React.Fragment>
			< div className="heading">
				<h1>Prince's theatre</h1>
				<h5>Classic Movies At Home</h5>
				<p>Where you can search and compare a cheaper provider</p>
			</div>
			{loading ? (
				<Loader />
			) : movies ? (
				<div className='result'>
					{movies.map((movie) => (
						<MovieListScreen movie={movie} key={movie.ID} />
					))}
				</div>
			) : (
				<Message>{error}</Message>
			)}
		</React.Fragment>
	);
};

export default MovieResultScreen;
