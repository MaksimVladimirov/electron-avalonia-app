import './style.css';
import { INonValidNameProps } from './NonValidNameProps';
import { FC } from 'react';

const NonValidName: FC<INonValidNameProps> = ({ message }) => {
  return <div className='nonValidName'>{message}</div>;
};

export default NonValidName;
