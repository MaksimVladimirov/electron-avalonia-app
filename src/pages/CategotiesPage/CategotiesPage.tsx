import './style.css';
import { observer } from 'mobx-react-lite';
import { useTodoStore, useOpenModal } from '../../hooks';
import { Header, OpenModalWindowAddCategoryBtn } from '../../components';
import { ModalWindow, Category, CreateCategoryForm } from '../../containers';
import { useEffect } from 'react';

const CategotiesPage = () => {
  const store = useTodoStore();
  const { openModal, openCreateModal } = useOpenModal();

  useEffect(() => {
    if (store.isBurgerMenuOpen) {
      store.changeBurgerMenuOpen();
    }
  }, []);

  return (
    <div className='categotiesPage'>
      <Header activePage='categories'>
        <OpenModalWindowAddCategoryBtn openModalHandler={openCreateModal} />
      </Header>
      <ul className='categotiesPage__list'>
        {store.getCategories().map((category) => {
          return <Category category={category} key={category.id} />;
        })}
      </ul>
      {openModal.createModal && (
        <ModalWindow openModalHandler={openCreateModal}>
          <CreateCategoryForm openModalHandler={openCreateModal} />
        </ModalWindow>
      )}
    </div>
  );
};

export default observer(CategotiesPage);
