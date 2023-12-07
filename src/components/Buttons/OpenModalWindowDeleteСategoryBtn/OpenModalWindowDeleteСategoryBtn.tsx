import './style.css';
import { IOpenModalWindowDeleteCategoryBtn } from './OpenModalWindowDeleteСategoryBtnProps';
import { FC } from 'react';
import trashCartIcon from '../../../images/icons/TrashCartIcon.svg';

const OpenModalWindowDeleteСategoryBtn: FC<IOpenModalWindowDeleteCategoryBtn> = ({ openModalHandler }) => {
  return (
    <div className='openModalWindowDeleteСategoryBtn' onClick={openModalHandler}>
      <img src={trashCartIcon} alt='trashCartIcon' />
    </div>
  );
};

export default OpenModalWindowDeleteСategoryBtn;
