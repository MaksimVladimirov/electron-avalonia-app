import './style.css';
import { IInputProps } from './IInputProps';
import { FC } from 'react';

const Input: FC<IInputProps> = ({ changeHandler, placeholder, maxLength, value, changeTouched }) => {
  return (
    <div className='input'>
      <div className='input__title'>
        Имя
        <div>*</div>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        onChange={changeHandler}
        onFocus={changeTouched}
        maxLength={maxLength}
        value={value}
      />
    </div>
  );
};

export default Input;
