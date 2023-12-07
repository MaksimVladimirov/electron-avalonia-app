import './style.css';
import { Input, Textarea, ConfirmBtn, СancelBtn, NonValidName } from '../../../components';
import { DropDownList } from '../..';
import { ICreateTaskFormProps } from './CreateTaskFormProps';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useTaskForm, useTodoStore } from '../../../hooks';

const CreateTaskForm: FC<ICreateTaskFormProps> = ({ openModalHandler }) => {
  const store = useTodoStore();
  const { task, changeName, changeDescription, changeCategory, taskNameValid, changeTouched } = useTaskForm({
    name: '',
    categoryId: 0,
    description: '',
    id: store.getLastTaskId(),
  });

  const changeInputHandler = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    changeName(input.value);
  };

  const changeTextAreaHandler = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    changeDescription(input.value);
  };

  const submitFormData = async () => {
    if (!taskNameValid) {
      return;
    }
    await store.addNewTask(task);
    openModalHandler();
    if (store.isBurgerMenuOpen) {
      store.changeBurgerMenuOpen();
    }
  };

  return (
    <div className='createTaskForm'>
      <div className='createTaskForm__title'>Создание задачи</div>
      <div className='createTaskForm__body'>
        <div className='createTaskForm__body-input'>
          <Input
            changeTouched={changeTouched}
            changeHandler={changeInputHandler}
            placeholder='Введите имя задачи'
            maxLength={255}
            value={task.name}
          />
          {!taskNameValid && <NonValidName message='Имя задачи не может быть пустым' />}
        </div>
        <DropDownList changeHandler={changeCategory} />
        <Textarea
          changeHandler={changeTextAreaHandler}
          placeholder='Введите описание задачи'
          maxLength={1536}
          value={task.description}
        />
      </div>
      <div className='createTaskForm__buttons'>
        <ConfirmBtn text='Создать' clickHandler={submitFormData} />
        <СancelBtn text='Закрыть' clickHandler={openModalHandler} />
      </div>
    </div>
  );
};

export default observer(CreateTaskForm);
