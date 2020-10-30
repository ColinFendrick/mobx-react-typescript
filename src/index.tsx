import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { TodoList } from './stores';
import { StoreProvider } from './context/StoreContext';
import reportWebVitals from './reportWebVitals';

const todoList = new TodoList([
	'Should Starting Writing in React',
	'Should Learn MobX',
	'Should Watch Once Piece :)'
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
