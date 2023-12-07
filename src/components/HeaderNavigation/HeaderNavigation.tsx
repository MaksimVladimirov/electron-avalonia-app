import './style.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface IHeaderNavigation {
  activePage: 'tasks' | 'categories';
}

const HeaderNavigation: FC<IHeaderNavigation> = ({ activePage }) => {
  return (
    <nav className={`header__nav ${activePage}`}>
      <Link to={'/'} className='header__nav-tasks'>
        Задачи
      </Link>
      <div className='header__nav-stick'></div>
      <Link to={'/categories'} className='header__nav-categories'>
        Категории
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
