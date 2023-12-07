import './style.css';
import CloseCrossIcon from '../../../images/icons/closeCrossIcon.svg';
import { FC } from 'react';
import { ICloseCrossBtn } from './CloseCrossBtnProps';

const CloseCrossBtn: FC<ICloseCrossBtn> = ({ closeHandler }) => {
  return (
    <div className='closeCrossBtn' onClick={closeHandler}>
      <img src={CloseCrossIcon} alt='CloseCrossIcon' />
    </div>
  );
};

export default CloseCrossBtn;
