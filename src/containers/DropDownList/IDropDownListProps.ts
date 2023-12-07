import { ICategory } from '../../types';

export interface IDropDownListProps {
  changeHandler: (id: number) => void;
  activeCategory?: ICategory;
}
