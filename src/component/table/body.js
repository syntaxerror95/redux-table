import { deletRow, editRow, openModal } from "../../redux";

function Body({ tableList, dispatch }) {
  return (
    <tbody>
      {tableList.length > 0 &&
        tableList.map((row) => (
          <tr key={row.id}>
            <td>{row.fname}</td>
            <td>{row.lname}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  dispatch(openModal({editId : row.id, fname : row.fname, lname : row.lname}));
                }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(deletRow(row.id));
                }}
              >
                -
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
}

export default Body;
