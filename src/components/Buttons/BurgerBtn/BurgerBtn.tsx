import './style.css';
import { FC } from 'react';
import { IBurgerBtnProps } from './BurgerBtnProps';

const BurgerBtn: FC<IBurgerBtnProps> = ({ openCloseHandler }) => {
  return (
    <div className='burgerBtn' onClick={openCloseHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
