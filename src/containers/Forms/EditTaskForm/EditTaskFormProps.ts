import { ITask } from '../../../types';

export interface IEditTaskFormProps {
  taskData: ITask;
  openModalHandler: () => void;
}
