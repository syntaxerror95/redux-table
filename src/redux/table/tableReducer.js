import {
  ADD_ROW,
  DELETE_ROW,
  OPEN_MODAL,
  CLOSE_MODAL,
  EDIT_ROW,
} from "./constants";

/*
* modal : (Object) To handle Modal events
*       openModal : true/false Open/Close Modal
*       editId    : Id Number to to updated( = 0 if Add New Row)
*       fname     : First Name Input to be Add/Edit.
*       lname     : Last Name Input to be Add/Edit.
*
* table : (Array of Objects) To handle table Add/Delete/Update. Maintains tableList
*       id        : Keep every row unique.
*       fname     : Fist Name column value.
*       lname     : Last Name column value.
*/

const initialState = {
  modal: {
    openModal: false,
    editId: 0,
    fname: "",
    lname: "",
  },
  table: [
    { id: 1, fname: "Sahadev", lname: "Tandur" },
    { id: 2, fname: "Manjunath", lname: "KL" },
  ],
};
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      // Empty row not allowed.
      if (!action.payload.fname && !action.payload.lname) {
        return {
          ...state,
          modal: { openModal: false, editId: 0, fname: "", lname: "" },
        };
      }
      return {
        ...state,
        modal: { openModal: false, editId: 0, fname: "", lname: "" },
        table: [
          ...state.table,
          {
            id: action.payload.id,
            fname: action.payload.fname,
            lname: action.payload.lname,
          },
        ],
      };
    case DELETE_ROW:
      // Filter out the deleted row.
      return {
        ...state,
        table: state.table.filter((val) => val.id !== action.payload),
      };
    case EDIT_ROW:
      // Empty row not allowed.
      if (!action.payload.fname && !action.payload.lname) {
        return {
          ...state,
          modal: { openModal: false, editId: 0, fname: "", lname: "" },
        };
      }
      return {
        ...state,
        table: state.table.map((val) => {
          if (val.id == action.payload.id) {
            return {
              id: action.payload.id,
              fname: action.payload.fname,
              lname: action.payload.lname,
            };
          }
          return val;
        }),
        modal: {
          openModal: false,
          editId: 0,
          fname: "",
          lname: "",
        },
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          openModal: true,
          editId: action.payload.editId,
          fname: action.payload.fname,
          lname: action.payload.lname,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, openModal: false },
      };
    default:
      return state;
  }
};

export default tableReducer;
