import { ITaskProps } from './ITaskProps';
import { FC, useMemo } from 'react';
import './style.css';
import { useTodoStore } from '../../hooks';
import { observer } from 'mobx-react-lite';
import { OpenModalWindowEditTaskBtn, OpenModalWindowDeleteTaskBtn } from '../../components';
import { useOpenModal } from '../../hooks';
import { ModalWindow } from '../ModalWindow';
import { EditTaskForm, DeleteTaskForm } from '../../containers';

const Task: FC<ITaskProps> = ({ task }) => {
  const { description, name, categoryId, id } = task;
  const { openModal, openEditModal, openDeleteModal } = useOpenModal();

  const store = useTodoStore();
  const category = useMemo(() => store.getCategoryById(categoryId), [categoryId]);
  return (
    <li className='task'>
      <div className='task__header'>
        <div className='task__header-title task__title'>
          <div className='task__title-taskName'>{name}</div>
          {category && <div className='task__title-categoryName'>{category.name}</div>}
        </div>
        <div className='task__header-buttons task__buttons'>
          <OpenModalWindowEditTaskBtn openModalHandler={openEditModal} />
          <OpenModalWindowDeleteTaskBtn openModalHandler={openDeleteModal} />
        </div>
      </div>
      <div className='task__description'>{description}</div>
      {openModal.editModal && (
        <ModalWindow openModalHandler={openEditModal}>
          <EditTaskForm taskData={task} openModalHandler={openEditModal} />
        </ModalWindow>
      )}
      {openModal.deleteModal && (
        <ModalWindow openModalHandler={openDeleteModal}>
          <DeleteTaskForm taskName={name} taskId={id} openModalHandler={openDeleteModal} />
        </ModalWindow>
      )}
    </li>
  );
};

export default observer(Task);
