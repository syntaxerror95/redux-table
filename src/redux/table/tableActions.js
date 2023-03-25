import { ADD_ROW, DELETE_ROW, EDIT_ROW, OPEN_MODAL, CLOSE_MODAL } from "./constants"

export const addRow = (name={fname:"", lname:""}) =>{
    return {
        type : ADD_ROW,
        payload : name
    }
}

export const deletRow = (id=0) =>{
    return {
        type : DELETE_ROW,
        payload : id
    }
}

export const editRow = (name={fname:"", lname:"", editId:0}) =>{
    return {
        type : EDIT_ROW,
        payload : name
    }
}

export const openModal = (name={fname:"", lname:"", editId:0}) =>{
    return {
        type : OPEN_MODAL,
        payload : name
    }
}

export const closeModal = () =>{
    return {
        type : CLOSE_MODAL
    }
}