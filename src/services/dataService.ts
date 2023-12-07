class DataService {
    private BASE_URL: string;
    constructor() {
        this.BASE_URL = 'http://localhost:8089/api/ToDoList/';
    }

    getTasks = <T>(): Promise<T> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}GetTasks`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => reject(err));
        });
    };

    getCategories = <T>(): Promise<T> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}GetCategories`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    };

    getAllData = <taskType, categoryType>(): Promise<{
    tasks: taskType;
    categories: categoryType;
  }> => {
        return new Promise((resolve, reject) => {
            Promise.all([this.getTasks<taskType>(), this.getCategories<categoryType>()])
                .then(([tasks, categories]) => {
                    resolve({ tasks, categories });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    addNewTask = <T>(task: T): Promise<T> => {
        const raw = JSON.stringify(task);
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}AddTask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    };

    editTask = <T>(task: T): Promise<T> => {
        const raw = JSON.stringify(task);
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}UpdateTask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    };

    deleteTask = <T>(taskId: T): Promise<string> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}RemoveTask/${taskId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then((response) => resolve(response))
                .catch((err) => {
                    reject(err);
                });
        });
    };

    addNewCategory = <T>(category: T): Promise<T> => {
        const raw = JSON.stringify(category);
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}AddCategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    };

    editCategory = <T>(category: T): Promise<T> => {
        const raw = JSON.stringify(category);
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}UpdateCategory`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        });
    };

    deleteCategory = <T>(categoryId: T): Promise<string> => {
        return new Promise((resolve, reject) => {
            fetch(`${this.BASE_URL}RemoveCategory/${categoryId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    };
}

export const dataService = new DataService();
