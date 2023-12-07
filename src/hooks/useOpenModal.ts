import { useState } from 'react';

interface IOpenModal {
  [property: string]: boolean;
}

export const useOpenModal = () => {
    const [openModal, setOpenModal] = useState<IOpenModal>({
        createModal: false,
        editModal: false,
        deleteModal: false,
    });

    const openCreateModal = () => {
        setOpenModal((prev) => {
            return { ...prev, createModal: !prev.createModal };
        });
    };

    const openEditModal = () => {
        setOpenModal((prev) => {
            return { ...prev, editModal: !prev.editModal };
        });
    };

    const openDeleteModal = () => {
        setOpenModal((prev) => {
            return { ...prev, deleteModal: !prev.deleteModal };
        });
    };

    return { openModal, openCreateModal, openEditModal, openDeleteModal };
};
