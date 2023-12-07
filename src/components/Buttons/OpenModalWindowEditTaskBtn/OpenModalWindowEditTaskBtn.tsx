import './style.css';
import { IOpenModalWindowEditTaskBtn } from './OpenModalWindowEditTaskBtnProps';
import { FC } from 'react';
import pencilIcon from '../../../images/icons/pencilIcon.svg';

const OpenModalWindowEditTaskBtn: FC<IOpenModalWindowEditTaskBtn> = ({ openModalHandler }) => {
  return (
    <div className='openModalWindowEditTaskBtn' onClick={openModalHandler}>
      <img src={pencilIcon} alt='pencilIcon' />
    </div>
  );
};

export default OpenModalWindowEditTaskBtn;
