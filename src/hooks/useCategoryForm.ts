import { useState, useEffect } from 'react';
import { ICategory } from '../types';

export const useCategoryForm = (currentCategory: ICategory) => {
    const [category, setCategory] = useState(currentCategory);
    const [categoryNameValid, setCategoryNameValid] = useState(true);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (!category.name && touched) {
            setCategoryNameValid(false);
        } else {
            setCategoryNameValid(true);
        }
    }, [category.name]);

    const changeName = (name: string) => {
        setCategory((prev) => {
            return { ...prev, name };
        });
    };

    const changeDescription = (description: string) => {
        setCategory((prev) => {
            return { ...prev, description };
        });
    };

    const changeTouched = () => {
        setTouched(true);
    };

    return {
        category,
        changeName,
        changeDescription,
        categoryNameValid,
        changeTouched,
    };
};
