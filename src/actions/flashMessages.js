import {ADD_FLASH_MEASSAGE, DELETE_FLASH_MESSAGE} from '../types'

export const  addFlashMessage = (message) => ({
    type : ADD_FLASH_MEASSAGE,
    message
})

export const deleteFlashMessage = (id) => ({
    type : DELETE_FLASH_MESSAGE,
    id
})
