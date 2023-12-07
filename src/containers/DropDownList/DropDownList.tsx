import './style.css';
import listOpenIcon from '../../images/icons/listOpenIcon.svg';
import { useTodoStore } from '../../hooks';
import { IDropDownListProps } from './IDropDownListProps';
import { FC } from 'react';
import { trimLine } from '../../utils';

const DropDownList: FC<IDropDownListProps> = ({ changeHandler, activeCategory }) => {
    const store = useTodoStore();

    const selectOption = (e: React.ChangeEvent) => {
        const selectedElem = e.target as HTMLSelectElement;
        if (selectedElem.value !== '0') {
            selectedElem.classList.add('selected');
        } else {
            selectedElem.classList.remove('selected');
        }

        changeHandler(+selectedElem.value);
    };

    return (
        <div className='dropdown'>
            <label htmlFor='categories' className='dropdown__listOpenIcon'>
                <img src={listOpenIcon} alt='listOpenIcon' />
            </label>
            <div className='dropdown__title'>Категория</div>
            <select
                id='categories'
                name='categories'
                className={`dropdown__select ${activeCategory ? 'selected' : ''}`}
                onChange={selectOption}
            >
                {activeCategory ? (
                    <option value={activeCategory.id} className='dropdown__option'>
                        {activeCategory.name}
                    </option>
                ) : null}
                <option value='0' className='dropdown__option'>
                    Выберите категорию
                </option>
                {store.getCategories().map((category) => {
                    return (
                        <option value={category.id} className='dropdown__option' key={category.id}>
                            {category.name.length > 15 ? trimLine(category.name) : category.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default DropDownList;
