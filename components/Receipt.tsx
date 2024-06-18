// components/Receipt.tsx
import React from 'react';
import './Receipt.css';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ReceiptProps {
  order: OrderItem[];
  taxRate: number;
  receiptNumber: string;
  issueDate: string;
  seller: {
    name: string;
    address: string;
    vatNumber: string;
  };
  buyer?: {
    name?: string;
    address?: string;
  };
}

const Receipt: React.FC<ReceiptProps> = ({ order, taxRate, receiptNumber, issueDate, seller, buyer }) => {
  const total = React.useMemo(() =>
    order.reduce((sum, item) => sum + item.price * item.quantity, 0), [order]);
  const taxAmount = (total * taxRate) / 100;
  const totalWithTax = total + taxAmount;

  return (
    <div className="receipt br">
        
         <h1>Ogbik Technologies</h1>
      <div className="header">
        <div>
        <strong>Seller:</strong>
          <p>{seller.name}</p>
          <p>{seller.address}</p>
          <p>VAT: {seller.vatNumber}</p>
        </div>
        {buyer && (
          <div>
            <strong>Buyer:</strong>
            <p>{buyer.name}</p>
            <p>{buyer.address}</p>
          </div>
        )}
      </div>
      <div className="details">
        <p><strong>Receipt Number:</strong> {receiptNumber}</p>
        <p><strong>Date:</strong> {issueDate}</p>
      </div>
      <ul className="receipt-list">
        {order.map((item) => (
          <li key={item.id} className="receipt-item br">


            <p  style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.quantity}</span>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </p>






          </li>
        ))}
      </ul>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span></span>
        <span></span>
        <span></span>
        <span> <strong>Total: ${total.toFixed(2)}</strong></span>
      </p>

      <strong>Tax ({(taxRate).toFixed(2)}%): ${taxAmount.toFixed(2)}</strong>
      <strong>Total with Tax: ${totalWithTax.toFixed(2)}</strong>
      <div className="footer">Ogbik Technologies</div>
    </div>
  );
};

export default Receipt;
