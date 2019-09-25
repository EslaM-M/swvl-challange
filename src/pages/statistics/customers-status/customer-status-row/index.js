import React from "react";

function CustomerStatusRow({ index, userId, userName, status }) {
  return (
    <>
    <tr>
      <td data-testid="index">{index + 1}</td>
      <td data-testid="user-id">{userId}</td>
      <td data-testid="user-name">{userName}</td>
      <td data-testid="status">{status}</td>
    </tr>
    </>
  );
}

export default CustomerStatusRow;
