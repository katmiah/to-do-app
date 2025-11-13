import React, { useEffect, useState } from "react";
const ListTodos = () => {
  return (
    <>
      <table className="table mt-5 text-centre">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
