import './style.css';
import { ICategoryProps } from './CategoryProps';
import { FC } from 'react';
import { useOpenModal } from '../../hooks';
import { ModalWindow } from '../ModalWindow';
import { observer } from 'mobx-react-lite';
import { OpenModalWindowDeleteСategoryBtn, OpenModalWindowEditCategoryBtn } from '../../components';
import { EditCategoryForm, DeleteCategoryForm } from '../Forms';

const Category: FC<ICategoryProps> = ({ category }) => {
  const { name, id, description } = category;
  const { openModal, openEditModal, openDeleteModal } = useOpenModal();

  return (
    <li className='category'>
      <div className='category__header'>
        <div className='category__header-title'>{name}</div>
        <div className='category__header-buttons category__buttons'>
          <OpenModalWindowEditCategoryBtn openModalHandler={openEditModal} />
          <OpenModalWindowDeleteСategoryBtn openModalHandler={openDeleteModal} />
        </div>
      </div>
      <div className='category__description'>{description}</div>
      {openModal.editModal && (
        <ModalWindow openModalHandler={openEditModal}>
          <EditCategoryForm categoryData={category} openModalHandler={openEditModal} />
        </ModalWindow>
      )}
      {openModal.deleteModal && (
        <ModalWindow openModalHandler={openDeleteModal}>
          <DeleteCategoryForm categoryName={name} categoryId={id} openModalHandler={openDeleteModal} />
        </ModalWindow>
      )}
    </li>
  );
};

export default observer(Category);
