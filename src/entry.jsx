import React from 'react';
import { render } from 'react-dom';
import App from './components/routes/app.jsx';

window.main = function() {
	render(<App />,
		document.getElementById('container'));
}