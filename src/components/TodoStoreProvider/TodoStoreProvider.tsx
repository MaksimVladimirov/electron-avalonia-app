import { TodoContext } from '../../contexts';
import { TodoStore } from '../../stores';
import { PropsWithChildren, FC } from 'react';

const TodoStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const todoStore = new TodoStore();
  return <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>;
};

export default TodoStoreProvider;
