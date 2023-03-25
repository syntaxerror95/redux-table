import { useDispatch } from "react-redux";
import { closeModal } from "../../redux";

function Footer({ dispatch }) {
//   const dispatch = useDispatch();

  return (
    <div className="modal-footer">
      <button type="submit" onClick={() => dispatch(closeModal())}>
        OK
      </button>
      <button type="button" onClick={() => dispatch(closeModal())}>
        Cancel
      </button>
    </div>
  );
}

export default Footer;
