import React from 'react';

function CourseListRow(props) {
  if (props.isHeader) {
    return (
      <tr>
        {!props.textSecondCell
          ? (<th colSpan='2'>{props.textFirstCell}</th>)
          : (
            <>
              <th>{props.textFirstCell}</th>
              <th>{props.textSecondCell}</th>
            </>
            )
        }
      </tr>
    )
  }
  return (
    <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>
  )
}

export default CourseListRow;

