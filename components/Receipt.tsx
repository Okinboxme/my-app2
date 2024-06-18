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
      <h1>Ogbik Technologies</h1>
      <ul>
        {order.map((item) => (
          <li key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.quantity}</span>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <div className="footer">Ogbik Technologies</div>
    </div>
  );
};

export default Receipt;
