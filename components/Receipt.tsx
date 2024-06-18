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
    <div className="receipt br text-xs">
         <table className="receipt-table">
      
          <tr>
            <td style={{ textAlign: 'center' }}>{seller.name}</td>
           
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>{seller.address}</td>
           
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>{seller.vatNumber}</td>
           
          </tr>
       
        </table>
         
     
        
     
      <div className="details">
        <p><strong>Receipt Number:</strong> {receiptNumber}</p>
        <p><strong>Date:</strong> {issueDate}</p>
      </div>

      <table className="receipt-table">
        <thead>
          <tr>
            <th>Qty</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => (
            <tr key={item.id} className="receipt-item">
              <td>{item.quantity}</td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'right' }}>Sub-Total:</td>
            <td><strong>${total.toFixed(2)}</strong></td>
          </tr>
          <tr>
            <td colSpan={3} style={{ textAlign: 'right' }}><strong>Tax ({(taxRate).toFixed(2)}%): </strong></td>
            <td><strong>${taxAmount.toFixed(2)}</strong></td>
          </tr>

          <tr>
            <td colSpan={3} style={{ textAlign: 'right' }}><strong>Total with Tax: </strong></td>
            <td><strong>${totalWithTax.toFixed(2)}</strong></td>
          </tr>
         
        </tfoot>
      </table>
      
  
      <div className="footer">Ogbik Technologies</div>
    </div>
  );
};

export default Receipt;
