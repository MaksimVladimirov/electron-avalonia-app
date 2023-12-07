import { PropsWithChildren, FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './style.css';
import { observer } from 'mobx-react-lite';
import { CloseCrossBtn } from '../../components';

interface IModalWindow {
    openModalHandler: () => void;
}

const ModalWindow: FC<PropsWithChildren<IModalWindow>> = ({ children, openModalHandler }) => {
    const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(null);
    const modalContainerElem = document.getElementById('modalWindow') as HTMLDivElement;

    useEffect(() => {
        setModalContainer(modalContainerElem);

        return () => {
            modalContainerElem.innerHTML = '';
        };
    }, []);

    return (
        <div className='modalWindow'>
            {modalContainer &&
                createPortal(
                    <div className='modal__container' onClick={openModalHandler}>
                        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                            <CloseCrossBtn closeHandler={openModalHandler} />
                            {children}
                        </div>
                    </div>,
                    modalContainer,
                )}
        </div>
    );
};

export default observer(ModalWindow);
