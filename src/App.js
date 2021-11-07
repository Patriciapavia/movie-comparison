import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container, Box} from '@mui/material';
import MovieScreen from './Components/MovieResultScreen';
import PropTypes from 'prop-types';
function Item(props) {
	const { sx, ...other } = props;
	return (
		<Box
			sx={{
				p: 1,
				m: 1,
				borderRadius: 1,
				textAlign: 'center',
				fontSize: '1rem',
				fontWeight: '500',
				...sx,
			}}
			{...other}
		/>
	);
}
Item.propTypes = {
	sx: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
function App() {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					p: 1,
					m: 1,
				}}
			>
				<Item>
					<h1>Prince's theater</h1>
					<h5>Classic Movies At Home</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor
					</p>
					<p>
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud
					</p>
					<p> exercitation</p>
				</Item>
			</Box>
			<Router>
				<Route path='/' component={MovieScreen} exact />
			</Router>
		</Container>
	);
}

export default App;
