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
							image={movie.Poster}
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h6' component='div'>
								{movie.Title}
							</Typography>
						
							<Grid container spacing={4}>
								<Grid item xs={6} md={6} lg={6}>
									Cinemaworld
								</Grid>
								<Grid item xs={6} md={6} lg={6}>
									${}
								</Grid>
							</Grid>
							<Grid container spacing={4}>
								<Grid item xs={6} md={6} lg={6}>
									Filmworld
								</Grid>
								<Grid item xs={6} md={6} lg={6}>
									${movie.Price}
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
