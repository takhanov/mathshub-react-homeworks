import React from "react";


function TableItem({record}) {
    return (
        <tr>
            {Object.entries(record).map(row => ( row[0] === 'id' ? '' : <td>{row[1]}</td>))}
        </tr>
    )
}

export default TableItem