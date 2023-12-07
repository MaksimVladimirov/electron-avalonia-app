import './style.css';
import { Header, OpenModalWindowAddTaskBtn } from '../../components';
import { useTodoStore, useOpenModal } from '../../hooks';
import { observer } from 'mobx-react-lite';
import { ModalWindow, Task, CreateTaskForm } from '../../containers';
import { useEffect } from 'react';

const TasksPage = () => {
    const store = useTodoStore();
    const { openModal, openCreateModal } = useOpenModal();

    useEffect(() => {
        if (store.isBurgerMenuOpen) {
            store.changeBurgerMenuOpen();
        }
    }, []);

    return (
        <div className='tasksPage'>
            <Header activePage='tasks'>
                <OpenModalWindowAddTaskBtn openModalHandler={openCreateModal} />
            </Header>
            <ul className='tasksPage__list'>
                {store.getTasks().map((task) => {
                    return <Task task={task} key={task.id} />;
                })}
            </ul>
            {openModal.createModal && (
                <ModalWindow openModalHandler={openCreateModal}>
                    <CreateTaskForm openModalHandler={openCreateModal} />
                </ModalWindow>
            )}
        </div>
    );
};

export default observer(TasksPage);
