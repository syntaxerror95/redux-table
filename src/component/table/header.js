import { useSelector } from "react-redux";

function Header({ tableList }) {
  return (
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>action</th>
      </tr>
    </thead>
  );
}

export default Header;
