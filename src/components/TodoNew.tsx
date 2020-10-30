import React, { useState } from 'react';
import { useStore } from '../hooks';
import { onEnterPress } from '../helpers';

const TodoNew = (): React.ReactElement => {
	const [newTodo, setTodo] = useState('');
	const todoList = useStore();

	const addTodo = () => {
		todoList.addTodo(newTodo);
		setTodo('');
	};

	return (
		<div className='todo-new'>
			<input type='text' value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e) => setTodo(e.target.value)}/>
			<button onClick={addTodo}>Add Todo</button>
		</div>
	);
};

export default TodoNew;
