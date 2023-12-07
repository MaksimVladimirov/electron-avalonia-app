import './style.css';
import { FC } from 'react';
import { IEditCategoryFormProps } from './EditCategoryFormprops';
import { observer } from 'mobx-react-lite';
import { useCategoryForm, useTodoStore } from '../../../hooks';
import { Input, Textarea, ConfirmBtn, СancelBtn, NonValidName } from '../../../components';

const EditCategoryForm: FC<IEditCategoryFormProps> = ({ categoryData, openModalHandler }) => {
  const store = useTodoStore();
  const { category, changeName, changeDescription, categoryNameValid, changeTouched } = useCategoryForm(categoryData);

  const changeInputHandler = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    changeName(input.value);
  };

  const changeTextAreaHandler = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    changeDescription(input.value);
  };

  const submitFormData = async () => {
    await store.editCategory(category);
    openModalHandler();
  };

  return (
    <div className='editCategoryForm'>
      <div className='editCategoryForm__title'>Редактирование категории</div>
      <div className='editCategoryForm__body'>
        <div className='editCategoryForm__body-input'>
          <Input
            changeHandler={changeInputHandler}
            placeholder='Введите имя категории'
            maxLength={255}
            value={category.name}
            changeTouched={changeTouched}
          />
          {!categoryNameValid && <NonValidName message='Имя категории не может быть пустым' />}
        </div>
        <Textarea
          changeHandler={changeTextAreaHandler}
          placeholder='Введите описание категории'
          maxLength={1536}
          value={category.description}
        />
      </div>
      <div className='editCategoryForm__buttons'>
        <ConfirmBtn text='Создать' clickHandler={submitFormData} />
        <СancelBtn text='Закрыть' clickHandler={openModalHandler} />
      </div>
    </div>
  );
};

export default observer(EditCategoryForm);
