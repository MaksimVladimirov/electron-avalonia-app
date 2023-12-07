import './style.css';
import { IOpenModalWindowAddCategoryBtn } from './OpenModalWindowAddCategoryBtnProps';
import { FC } from 'react';

const OpenModalWindowAddCategoryBtn: FC<IOpenModalWindowAddCategoryBtn> = ({ openModalHandler }) => {
  return (
    <div className='openModalWindowAddCategoryBtn' onClick={openModalHandler}>
      Добавить категорию
    </div>
  );
};

export default OpenModalWindowAddCategoryBtn;
