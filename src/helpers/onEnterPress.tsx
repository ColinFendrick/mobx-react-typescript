import { KeyboardEvent } from 'react';

export default (cb: () => void) => (e: KeyboardEvent): void => {
	if (e.key === 'Enter') {
		cb();
	}
};
