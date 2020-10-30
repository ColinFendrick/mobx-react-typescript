import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import App from './App';
import { TodoList } from './stores';
import { StoreProvider } from './context/StoreContext';
import reportWebVitals from './reportWebVitals';

const todoList = new TodoList([
	'Learn MobX',
	'Watch the Mandalorian, premiering only on Disney+',
	'Cash that royalty check from Disney+'
]);

ReactDOM.render(
	<StoreProvider value={todoList}>
		<App />
	</StoreProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
