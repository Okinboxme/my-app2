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
      <div>Ogbik Technologies</div>
     
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
