import { observable, action } from 'mobx';

export default class TodoItem {
	id = Date.now();

	@observable text = '';
	@observable isDone = false;

	constructor(text: string) {
		this.text = text;
	}

	@action
	toggleIsDone = (): void => {
		this.isDone = !this.isDone;
	}

	@action
	updateText = (text: string): void => {
		this.text = text;
	}
}
