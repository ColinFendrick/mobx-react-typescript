import React from 'react';
import { TodoList, TodoNew } from './components';

const App: React.FC = (): React.ReactElement => (
	<div>
		<TodoList />
		<TodoNew />
	</div>
);

export default App;
