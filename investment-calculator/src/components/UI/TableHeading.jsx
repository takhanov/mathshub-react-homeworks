import React from "react";


function TableHeading({headings}) {
    return (
        <thead>
        <tr>
            {headings.map(heading => (<th>{heading}</th>) )}
        </tr>
        </thead>
    )
}

export default TableHeading