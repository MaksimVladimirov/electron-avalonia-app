import './style.css';
import { ITextAreaProps } from './ITextareaProps';
import { FC } from 'react';

const Textarea: FC<ITextAreaProps> = ({ placeholder, changeHandler, maxLength, value }) => {
  return (
    <div className='textarea'>
      <div className='textarea__title'>Описание</div>
      <textarea placeholder={placeholder} onChange={changeHandler} maxLength={maxLength} value={value} />
    </div>
  );
};

export default Textarea;
