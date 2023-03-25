import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Table from "./component/table";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
