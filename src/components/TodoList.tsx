import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { useStore } from '../hooks';
import { TodoItem as TodoItemStore } from '../stores';
import { TodoItem } from '.';

const TodoList: React.FC = (): React.ReactElement => {
	const todoList = useStore();

	const createTodoView = (todo: TodoItemStore) => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />;

	return useObserver(() => (
		<div className='todo-list'>
			<div className='open-todos'>
				<span>Open Todos</span>

				{todoList.openTodos.map(todo => (
					<TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
				))}
			</div>

			<div className='finished-todos'>
				<span>Finished Todos</span>

				{todoList.finishedTodos.map(createTodoView)}
			</div>
		</div>
	));
};

export default TodoList;
