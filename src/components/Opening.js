import React from 'react';

const Opening = function(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.date}</td>
    </tr>
  );
}

export default Opening;
