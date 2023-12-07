import { useState, useEffect } from 'react';
import { ITask } from '../types';

export const useTaskForm = (currentTask: ITask) => {
    const [task, setTask] = useState(currentTask);
    const [taskNameValid, setTaskNameValid] = useState(true);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (!task.name && touched) {
            setTaskNameValid(false);
        } else {
            setTaskNameValid(true);
        }
    }, [task.name]);

    const changeName = (name: string) => {
        setTask((prev) => {
            return { ...prev, name };
        });
    };

    const changeDescription = (description: string) => {
        setTask((prev) => {
            return { ...prev, description };
        });
    };

    const changeCategory = (id: number) => {
        setTask((prev) => {
            return { ...prev, categoryId: id };
        });
    };

    const changeTouched = () => {
        setTouched(true);
    };

    return {
        task,
        changeName,
        changeDescription,
        changeCategory,
        taskNameValid,
        changeTouched,
    };
};
