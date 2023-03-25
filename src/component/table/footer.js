import { openModal } from "../../redux";

function Footer({dispatch}) {
    return <tfoot className="infoTable-footer">
        <tr>
            <td colSpan="3">
                <button className="infoTable-footer-addBtn" type="button" onClick={() => dispatch(openModal())}>+</button>
            </td>
        </tr>
    </tfoot>
}

export default Footer;
