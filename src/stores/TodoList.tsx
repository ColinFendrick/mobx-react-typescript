import { action, computed, observable } from 'mobx';

import { TodoItem } from '../types';

class TodoList {
	@observable.shallow list: TodoItem[] = []

	constructor(todos: string[]) { todos.forEach(this.addTodo); }

	@action
	addTodo = (text: string): void => { this.list.push(new TodoItem(text)); }

	@action
	removeTodo = (todo: TodoItem): void => {
		this.list.splice(this.list.indexOf(todo), 1);
	}

	@computed
	get finishedTodos(): TodoItem[] {
		return this.list.filter(todo => todo.isDone);
	}

	@computed
	get openTodos(): TodoItem[] {
		return this.list.filter(todo => !todo.isDone);
	}
}

export default TodoList;
