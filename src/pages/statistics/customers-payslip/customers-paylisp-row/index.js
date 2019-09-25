import React from "react";

function CustomerPaylispRow({
  index,
  userId,
  userName,
  PaymentType,
  price,
  currency,
  pickupStation
}) {
  return (
    <tr>
      <td data-testid="index">{index + 1}</td>
      <td data-testid="user-id">{userId}</td>
      <td data-testid="user-name">{userName}</td>
      <td data-testid="payment-type">{PaymentType}</td>
      <td>
        <label data-testid="price">{price}</label>
        <label data-testid="currency">{currency}</label>
      </td>
      <td data-testid="station">Station{pickupStation}</td>
    </tr>
  );
}

export default CustomerPaylispRow;
