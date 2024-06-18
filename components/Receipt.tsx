// Receipt.tsx
import React from 'react';
import './Receipt.css';
interface ReceiptProps {
  order: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  taxRate: number;
}

const Receipt: React.FC<ReceiptProps> = ({ order,total, taxRate }) => {
  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxAmount = total * taxRate;
  const totalWithTax = total + taxAmount;

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
      <h3>Tax ({(taxRate * 100).toFixed(2)}%): ${taxAmount.toFixed(2)}</h3>
      <h3>Total with Tax: ${totalWithTax.toFixed(2)}</h3>
      <div className="footer">Ogbik Technologies</div>
    </div>
  );
};

export default Receipt;
