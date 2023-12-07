import './style.css';
import { FC } from 'react';
import { IOpenModalWindowDeleteTaskBtn } from './OpenModalWindowDeleteTaskBtnProps';
import trashCartIcon from '../../../images/icons/TrashCartIcon.svg';

const OpenModalWindowDeleteTaskBtn: FC<IOpenModalWindowDeleteTaskBtn> = ({ openModalHandler }) => {
  return (
    <div className='OpenModalWindowDeleteTaskBtn' onClick={openModalHandler}>
      <img src={trashCartIcon} alt='trashCartIcon' />
    </div>
  );
};

export default OpenModalWindowDeleteTaskBtn;
