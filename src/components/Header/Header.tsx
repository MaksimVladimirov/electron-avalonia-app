import './style.css';
import { FC, PropsWithChildren } from 'react';
import { HeaderNavigation } from '../HeaderNavigation';
import { useTodoStore } from '../../hooks';
import { BurgerBtn } from '../Buttons';
import { observer } from 'mobx-react-lite';

interface IHeaderProps {
  activePage: 'tasks' | 'categories';
}

const Header: FC<PropsWithChildren<IHeaderProps>> = ({ activePage, children }) => {
  const store = useTodoStore();

  return (
    <header className={`header ${store.isBurgerMenuOpen ? 'burgerOpened' : ''}`}>
      <div className='header__title'>ToDo List</div>
      <div className='header__burgerMenu'>
        <HeaderNavigation activePage={activePage} />
        {children}
      </div>
      <BurgerBtn openCloseHandler={store.changeBurgerMenuOpen.bind(store)} />
    </header>
  );
};

export default observer(Header);
