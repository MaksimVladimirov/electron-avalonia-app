import './style.css';
import { FC } from 'react';
import { IOpenModalWindowAddTaskBtn } from './OpenModalWindowAddTaskBtnProps';

const OpenModalWindowAddTaskBtn: FC<IOpenModalWindowAddTaskBtn> = ({ openModalHandler }) => {
    return (
        <div className='openModalWindowAddTaskBtn' onClick={openModalHandler}>
            Добавить задачу
        </div>
    );
};

export default OpenModalWindowAddTaskBtn;
