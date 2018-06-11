import {OPEN_MODAL, CLOSE_MODAL} from './types';

export const modalOpened = (modalState) => ({
    type : OPEN_MODAL,
    modalState
});

export const modalClosed = (modalState) => ({
    type : CLOSE_MODAL,
    modalState
});

export const openModal = (modalId, modalType='edit') => (dispatch) =>
    dispatch(modalOpened({open: true, id: modalId, type: modalType}));

export const openConfirmModal = (modalId, modalType='confirm') => (dispatch) =>
    dispatch(modalOpened({open: true, id: modalId, type: modalType}));

export const closeModal = () => (dispatch) =>
    dispatch(modalClosed({open: false}));
