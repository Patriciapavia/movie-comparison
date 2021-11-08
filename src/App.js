import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container, Box} from '@mui/material';
import MovieScreen from './Components/MovieResultScreen';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
	palette: {
		background: {
			default: '#e4f0e2',
		},
	},
});

const themeDark = createMuiTheme({
	palette: {
		background: {
			default: '#06202A',
		},
	},
});
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
		<MuiThemeProvider theme={themeDark ? themeDark : themeLight}>
			<Container color='06202A'>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						p: 1,
						m: 1,
					}}
				>
					<Item>
						<h1>Prince's theatre</h1>
						<h5>Classic Movies At Home</h5>
						<p>Where you can search and compare a cheaper provider</p>
					</Item>
				</Box>
				<Router>
					<Route path='/' component={MovieScreen} exact />
				</Router>
			</Container>
		</MuiThemeProvider>
	);
}

export default App;
