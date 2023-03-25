import "./index.css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { closeModal } from "../../redux";
import { useDispatch } from "react-redux";

function Modal() {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(closeModal())} className="outer-container">
      <div onClick={(e) => e.stopPropagation()} className="inner-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <Header />
          <Body dispatch={dispatch}/>
        </form>
      </div>
    </div>
  );
}

export default Modal;
