import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import Modal from "../modal";
import "./index.css";

const Table = () => {
  const tableList = useSelector((state) => state.table);
  const openModal = useSelector((state) => state.modal.openModal);
  const dispatch = useDispatch();
  return (
    <table className="infoTable">
      <Header />
      <Body tableList={tableList} dispatch={dispatch} />
      <Footer dispatch={dispatch} />
      {openModal && <Modal />}
    </table>
  );
};

/*const mapStateToProps = (state) => {
    console.log("state", state)
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
    console.log("dispatch :", dispatch)
  return {
    increment: () => dispatch(increment()),
  };
};*/

export default Table;
