import { FC } from 'react';
import pencilIcon from '../../../images/icons/pencilIcon.svg';
import './style.css';
import { IOpenModalWindowEditCategoryBtnProps } from './OpenModalWindowEditCategoryBtnProps';

const OpenModalWindowEditCategoryBtn: FC<IOpenModalWindowEditCategoryBtnProps> = ({ openModalHandler }) => {
  return (
    <div className='openModalWindowEditCategoryBtn' onClick={openModalHandler}>
      <img src={pencilIcon} alt='pencilIcon' />
    </div>
  );
};

export default OpenModalWindowEditCategoryBtn;
