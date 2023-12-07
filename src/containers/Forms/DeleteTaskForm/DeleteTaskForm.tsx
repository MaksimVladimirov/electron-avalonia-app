import './style.css';
import { FC } from 'react';
import { IDeleteTaskFormProps } from './DeleteTaskFormProps';
import { СancelBtn, ConfirmBtn } from '../../../components';
import { useTodoStore } from '../../../hooks';
import { observer } from 'mobx-react-lite';

const DeleteTaskForm: FC<IDeleteTaskFormProps> = ({ taskName, taskId, openModalHandler }) => {
  const store = useTodoStore();

  const submitFormData = async () => {
    await store.deleteTask(taskId);
    openModalHandler();
  };

  return (
    <div className='deleteTaskForm'>
      <div className='deleteTaskForm__title'>Удаление задачи</div>
      <div className='deleteTaskForm__text'>{`Вы уверены, что хотите удалить задачу “${taskName}”?`}</div>
      <div className='deleteTaskForm__buttons'>
        <ConfirmBtn text='Да' clickHandler={submitFormData} />
        <СancelBtn text='Нет' clickHandler={openModalHandler} />
      </div>
    </div>
  );
};

export default observer(DeleteTaskForm);
