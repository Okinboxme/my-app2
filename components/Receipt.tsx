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
    <div>
      <div className="header">Ogbik Technologies</div>
      <table class="receipt-table">
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
