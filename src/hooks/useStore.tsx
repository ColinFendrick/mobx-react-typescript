import { useContext } from 'react';

import { TodoList } from '../stores';
import { StoreContext } from '../context/StoreContext';


export default (): TodoList => useContext(StoreContext);
