import {OPEN_MODAL, CLOSE_MODAL} from './types';

export const modalOpened = (modalState) => ({
    type : OPEN_MODAL,
    modalState
});

export const modalClosed = (modalState) => ({
    type : CLOSE_MODAL,
    modalState
});

export const openModal = (modalId) => (dispatch) =>
    dispatch(modalOpened({open: true, id: modalId}));

export const closeModal = () => (dispatch) =>
    dispatch(modalClosed({open: false}));
