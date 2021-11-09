import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import MovieResultScreen from './Components/MovieResults/MovieResultScreen';

function App() {
	return (
		<Router>
			<div className='app'>
				<Container>
					<Route path='/' component={MovieResultScreen} exact />
				</Container>
			</div>
		</Router>
	);
}

export default App;
