import React, { useState } from 'react';

import { useStore } from '../hooks';
import { TodoItem as TodoItemStore } from '../stores';
import { onEnterPress } from '../helpers';

interface TodoItemProps {
  todo: TodoItemStore
}

const TodoItem = ({ todo }: TodoItemProps): React.ReactElement => {
	const todoList = useStore();
	const [newText, setText] = useState('');
	const [isEditing, setEdit] = useState(false);

	const saveText = () => {
		todo.updateText(newText);
		setEdit(false);
		setText('');
	};

	return (
		<div className='todo-item'>
			{isEditing ? (
				<div>
					<input type='text' onKeyDown={onEnterPress(saveText)} onChange={(e) => setText(e.target.value)}/>
					<button onClick={saveText}>save</button>
				</div>
			) : (
				<div>
					<span>{todo.text}</span>
					<input type='checkbox' onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
					<button onClick={() => setEdit(true)}>edit</button>
					<button onClick={() => todoList.removeTodo(todo)}>X</button>
				</div>
			)}
		</div>
	);
};

export default TodoItem;
