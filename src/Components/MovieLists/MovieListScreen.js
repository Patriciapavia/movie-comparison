import React from 'react';
import {
	Paper,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Container,
} from '@mui/material';
import './MovieListScreen.css';
const MovieListScreen = ({ movie }) => {
	return (
		<>
			<div className='media'>
				<Container>
					<img className='poster' src={movie.poster} alt='poster' />
					<b className='title'>{movie.title}</b>
					<span className='subTitle'>
						<Typography variant='body2'>CinemaWorld</Typography>
						<span className='subTitle'>
							{movie.price[1] > movie.price[0] ? (
								<Typography variant='body2' color='error'>
									${movie.price[1]}{' '}
								</Typography>
							) : (
								<Typography variant='body2'>${movie.price[1]} </Typography>
							)}
						</span>
					</span>
					<span className='subTitle'>
						<Typography variant='body2'>Filmworld</Typography>
						<span className='subTitle'>
							{movie.price[0] > movie.price[1] ? (
								<Typography variant='body2' color='error'>
									${movie.price[0]}{' '}
								</Typography>
							) : (
								<Typography variant='body2'>${movie.price[0]} </Typography>
							)}
						</span>
					</span>
				</Container>
			</div>
		</>
	);
};

export default MovieListScreen;
