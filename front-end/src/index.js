import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/Store';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
