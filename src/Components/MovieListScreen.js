import React from 'react';
import { styled } from '@mui/material/styles';
import {
	Paper,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
}));
const MovieListScreen = ({ movie }) => {
	
	return (
		<React.Fragment>
			<Grid item xs={6} md={4} lg={3}>
				<Item>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component='img'
							height='200'
							image={movie.poster}
							alt='poster'
						/>
						<CardContent>
							<Typography variant='body1'>
								{movie.title}
							</Typography>

							<Grid container spacing={4}>
								<Grid item xs={6} md={6} lg={6}>
									<Typography variant='body2'>
									Cinemaworld
									</Typography>
								</Grid>
								<Grid item xs={6} md={6} lg={6}>
									{movie.price[1] > movie.price[0] ? (
										<Typography variant='body2' color='error'>
											${movie.price[1]}{' '}
										</Typography>
									) : (
										<Typography variant='body2'>${movie.price[1]} </Typography>
									)}
								</Grid>
							</Grid>
							<Grid container spacing={4}>
								<Grid item xs={6} md={6} lg={6}>
									<Typography variant='body2'>FilmWorld</Typography>
								</Grid>
								<Grid item xs={6} md={6} lg={6}>
									{movie.price[0] > movie.price[1] ? (
										<Typography variant='body2' color='error'>
											${movie.price[0]}{' '}
										</Typography>
									) : (
										<Typography variant='body2'>${movie.price[0]} </Typography>
									)}
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Item>
			</Grid>
		</React.Fragment>
	);
};

export default MovieListScreen;
