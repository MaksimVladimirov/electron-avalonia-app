import './style.css';
import loaderIcon from '../../images/icons/loaderIcon.svg';
import { observer } from 'mobx-react-lite';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__img'>
        <img src={loaderIcon} alt='loaderIcon' />
      </div>
    </div>
  );
};

export default observer(Loader);
