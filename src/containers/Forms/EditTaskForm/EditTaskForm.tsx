import './style.css';
import { Input, Textarea, ConfirmBtn, СancelBtn, NonValidName } from '../../../components';
import { DropDownList } from '../../DropDownList';
import { IEditTaskFormProps } from './EditTaskFormProps';
import { FC } from 'react';
import { useTaskForm, useTodoStore } from '../../../hooks';
import { observer } from 'mobx-react-lite';

const EditTaskForm: FC<IEditTaskFormProps> = ({ taskData, openModalHandler }) => {
  const store = useTodoStore();
  const { task, changeName, changeDescription, changeCategory, taskNameValid, changeTouched } = useTaskForm({
    ...taskData,
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
    await store.editTask(task);
    openModalHandler();
  };

  return (
    <div className='editTaskForm'>
      <div className='editTaskForm__title'>Редактирование задачи</div>
      <div className='editTaskForm__body'>
        <div className='editTaskForm__body-input'>
          <Input
            changeHandler={changeInputHandler}
            placeholder='Введите имя задачи'
            maxLength={255}
            value={task.name}
            changeTouched={changeTouched}
          />
          {!taskNameValid && <NonValidName message='Имя задачи не может быть пустым' />}
        </div>
        <DropDownList changeHandler={changeCategory} activeCategory={store.getCategoryById(taskData.categoryId)} />
        <Textarea
          changeHandler={changeTextAreaHandler}
          placeholder='Введите описание задачи'
          maxLength={1536}
          value={task.description}
        />
      </div>
      <div className='editTaskForm__buttons'>
        <ConfirmBtn text='Создать' clickHandler={submitFormData} />
        <СancelBtn text='Закрыть' clickHandler={openModalHandler} />
      </div>
    </div>
  );
};

export default observer(EditTaskForm);
