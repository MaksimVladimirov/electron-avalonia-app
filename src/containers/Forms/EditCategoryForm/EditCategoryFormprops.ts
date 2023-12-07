import { ICategory } from '../../../types';

export interface IEditCategoryFormProps {
  categoryData: ICategory;
  openModalHandler: () => void;
}
