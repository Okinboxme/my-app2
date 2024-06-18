// Receipt.tsx
import React from 'react';

interface ReceiptProps {
  order: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
}

const Receipt: React.FC<ReceiptProps> = ({ order, total }) => {
  return (
    <Div>
      <table className="receipt-table">
  <thead>
    <tr>
      <th>Date & Time</th>
      <th>[PIN]</th> <th>Invoice No.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Date & Time]</td> <td>[PIN]</td> <td>[Invoice Serial Number]</td> </tr>
  </tbody>
</table>

<table className="receipt-table">
  <thead>
    <tr>
      <th>Description</th>
      <th>HS Code</th>
      <th>Qty</th>
      <th>Unit</th>
      <th>Rate</th>
      <th>Amount (Excl. Tax)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>[HS Code]</td> <td>1</td>
      <td>Unit</td>
      <td>KSH 10.00</td>
      <td>KSH 10.00</td>
    </tr>
    <tr>
      <td>Item 2</td>
      <td>[HS Code]</td> <td>2</td>
      <td>Unit</td>
      <td>KSH 20.00</td>
      <td>KSH 40.00</td>
    </tr>
  </tbody>
</table>

<table className="receipt-table">
  <thead>
    <tr>
      <th colSpan=5></th>
      <th>Sub-Total</th>
      <th>Tax</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan=5></td>
      <td>KSH 50.00</td>  <td>KSH 8.00 (16%)</td>  </tr>
  </tbody>
</table>
      <ul>
        {order.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <div className="footer">Ogbik Technologies</div>
    </div>
  );
};

export default Receipt;
