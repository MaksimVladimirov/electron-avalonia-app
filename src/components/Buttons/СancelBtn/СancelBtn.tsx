import './style.css';
import { FC } from 'react';
import { IСancelBtnProps } from './СancelBtnProps';

const СancelBtn: FC<IСancelBtnProps> = ({ text, clickHandler }) => {
  return (
    <div className='cancelBtn' onClick={clickHandler}>
      {text}
    </div>
  );
};

export default СancelBtn;
