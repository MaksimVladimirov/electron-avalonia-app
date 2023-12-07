import './style.css';
import { useTodoStore } from '../../hooks';
import errorImg from '../../images/errorImg.jpg';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const ErrorPage = () => {
  const store = useTodoStore();
  useEffect(() => {
    return () => {
      store.changeError('');
    };
  }, []);

  return (
    <div className='errorPage'>
      <div className='errorPage__img'>
        <img src={errorImg} alt='errorImg' />
      </div>
      <div className='errorPage__message'>{`Ошибка: ${store.error.errorMessage}`}</div>
    </div>
  );
};

export default observer(ErrorPage);
