import { createContext } from 'react';
import { TodoList } from '../stores';

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
