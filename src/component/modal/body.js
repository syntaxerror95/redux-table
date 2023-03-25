import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, addRow, editRow } from "../../redux";
import useId from "../../hook/useId";

function Body({dispatch}) {
  const table = useSelector((state) => state.table);
  const modal = useSelector((state) => state.modal);
  const fnameInputRef = useRef();
  const [currentId, getUniqueId] = useId(table);

  const [fnameInp, setFNameInp] = useState(modal.fname);
  const [lnameInp, setLNameInp] = useState(modal.lname);

  console.log("modal", modal);
  useEffect(() => {
    // OnMount give focus to First Name Input.
    fnameInputRef && fnameInputRef.current.select();
  }, []);

  return (
    <>
      <div className="modal-body">
        <div className="modal-body-row">
          <span>First Name : </span>
          <input
            ref={fnameInputRef}
            type="text"
            value={fnameInp}
            onChange={(e) => setFNameInp(e.target.value)}
          ></input>
        </div>
        <div className="modal-body-row">
          <span>Last Name :</span>
          <input
            type="text"
            value={lnameInp}
            onChange={(e) => setLNameInp(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          onClick={() => {
            if (modal.editId) {
              // Edit Row.
              return dispatch(
                editRow({ id: modal.editId, fname: fnameInp, lname: lnameInp })
              );
            }
            
            // Add Row.
            return dispatch(
              addRow({ id: getUniqueId(), fname: fnameInp, lname: lnameInp })
            );
          }}
        >
          OK
        </button>
        <button type="button" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default Body;
