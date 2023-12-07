import { createContext } from 'react';
import { ITodoStore } from '../types';

export const TodoContext = createContext({} as ITodoStore);
