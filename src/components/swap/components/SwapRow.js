import "../../../styles/swap/SwapRow.css"
import React from "react";
import {CrossIco} from "../../../icons/IconsSelect";

const SwapRow = (props) => {
    let rows = []
    for (let i = 0; i < props.swap_rows.length; i++) {
        rows.push(
            <tr key = {props.swap_row_type + i} id={props.swap_row_type + i}>
                <td>
                    {props.swap_rows[i]}
                </td>
                <td><CrossIco/></td>
            </tr>
        )
    }
    return (
        <tbody>
        {rows}
        </tbody>
    )
}

export default SwapRow;