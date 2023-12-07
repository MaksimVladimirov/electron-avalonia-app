/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, runInAction } from 'mobx';
import { dataService } from '../services';
import { ITask, ITodoStore, ICategory, IError } from '../types';


class TodoStore implements ITodoStore {
    private tasks: ITask[];
    private categories: ICategory[];
    public isLoading: boolean;
    public isBurgerMenuOpen: boolean;
    public error: IError;
    constructor() {
        this.tasks = [];
        this.categories = [];
        this.isLoading = false;
        this.isBurgerMenuOpen = false;
        this.error = {
            isError: false,
            errorMessage: '',
        };
        makeAutoObservable(this);
    }

    loadTasks = async () => {
        try {
            this.changeLoading();
            const tasks = await dataService.getTasks<ITask[]>();
            runInAction(() => {
                this.tasks = tasks;
                this.changeLoading();
            });
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    loadCategories = async () => {
        try {
            this.changeLoading();
            const categories = await dataService.getCategories<ICategory[]>();
            runInAction(() => {
                this.categories = categories;
                this.changeLoading();
            });
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    loadAllData = async () => {
        try {
            this.changeLoading();
            const data = await dataService.getAllData<ITask[], ICategory[]>();
            runInAction(() => {
                this.tasks = data.tasks;
                this.categories = data.categories;
                this.changeLoading();
            });
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    addNewTask = async (task: ITask) => {
        try {
            this.changeLoading();
            await dataService.addNewTask<ITask>(task);
            this.changeLoading();
            await this.loadTasks();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    editTask = async (task: ITask) => {
        try {
            this.changeLoading();
            await dataService.editTask<ITask>(task);
            this.changeLoading();
            await this.loadTasks();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    deleteTask = async (taskId: number) => {
        try {
            this.changeLoading();
            await dataService.deleteTask<number>(taskId);
            this.changeLoading();
            await this.loadTasks();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    addNewCategory = async (category: ICategory) => {
        try {
            this.changeLoading();
            await dataService.addNewCategory<ICategory>(category);
            this.changeLoading();
            await this.loadCategories();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    editCategory = async (category: ICategory) => {
        try {
            this.changeLoading();
            await dataService.editCategory<ICategory>(category);
            this.changeLoading();
            await this.loadCategories();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    deleteCategory = async (categoryId: number) => {
        try {
            this.changeLoading();
            await dataService.deleteCategory<number>(categoryId);
            this.changeLoading();
            await this.loadCategories();
            return true;
        } catch (error: any) {
            this.changeError(error.message);
            this.changeLoading();
            return false;
        }
    };

    getTasks = () => {
        return this.tasks;
    };

    getLastTaskId = () => {
        return this.tasks[this.tasks.length - 1].id + 1;
    };

    getLastCategotyId = () => {
        return this.categories[this.categories.length - 1].id + 1;
    };

    getCategories = () => {
        return this.categories;
    };

    getCategoryById = (id: number): ICategory | undefined => {
        return this.categories.find((category) => category.id === id);
    };

    changeLoading = () => {
        this.isLoading = !this.isLoading;
    };
    
    changeBurgerMenuOpen = () => {
        this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
    };

    changeError = (message: string) => {
        this.error.isError = !this.error.isError;
        this.error.errorMessage = message;
    };
}

export default TodoStore;
