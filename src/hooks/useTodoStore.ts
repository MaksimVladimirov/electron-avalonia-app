import { useContext } from 'react';
import { TodoContext } from '../contexts';

export const useTodoStore = () => {
    const context = useContext(TodoContext);
    return context;
};
