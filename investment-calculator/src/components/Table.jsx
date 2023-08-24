import React from "react";
import TableItem from "./UI/TableItem.jsx";
import TableHeading from "./UI/TableHeading.jsx";


function Table({headings, records}) {
    return (
        <table className='result'>
            <TableHeading headings={headings}/>
            <tbody>
            {records.map(record =>(<TableItem record={record} key={record.id}/>))}
            </tbody>
        </table>
    )
}

export default Table