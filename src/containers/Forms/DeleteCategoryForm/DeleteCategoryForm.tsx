import './style.css';
import { FC } from 'react';
import { IDeleteCategoryFormProps } from './DeleteCategoryFormProps';
import { ConfirmBtn, СancelBtn } from '../../../components';
import { useTodoStore } from '../../../hooks';

const DeleteCategoryForm: FC<IDeleteCategoryFormProps> = ({ categoryId, categoryName, openModalHandler }) => {
  const store = useTodoStore();
  const submitFormData = async () => {
    await store.deleteCategory(categoryId);
    openModalHandler();
  };

  return (
    <div className='deleteCategoryForm'>
      <div className='deleteCategoryForm__title'>Удаление категории</div>
      <div className='deleteCategoryForm__text'>{`Вы уверены, что хотите удалить категорию “${categoryName}”?`}</div>
      <div className='deleteCategoryForm__buttons'>
        <ConfirmBtn text='Да' clickHandler={submitFormData} />
        <СancelBtn text='Нет' clickHandler={openModalHandler} />
      </div>
    </div>
  );
};

export default DeleteCategoryForm;
