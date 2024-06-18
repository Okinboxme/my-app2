import React, { useState } from 'react';
import Receipt from '@/components/Receipt';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderProps {
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
  removeFromOrder: (item: OrderItem) => void;
}
const seller = {
  name: 'Ogbik Technologies',
  address: '123 Main St, Nairobi, Kenya',
  vatNumber: '123456789',
};

// Example buyer information (optional)
const buyer = {
  name: 'John Doe',
  address: '456 Elm St, Nairobi, Kenya',
};

// Example receipt details
const receiptNumber = 'RECEIPT-001';
const issueDate = new Date().toLocaleDateString('en-KE');

// Example tax rate
const taxRate = 16; // 16% tax rate (adjust as necessary)

const Order: React.FC<OrderProps> = ({ order, setOrder, removeFromOrder }) => {
  const [printing, setPrinting] = useState(false);
  const total = order.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePrint = () => {
    const receiptContent = document.getElementById('receipt')?.innerHTML;
    if (receiptContent && window.electron && window.electron.print) {
      setPrinting(true); // Set printing state to show progress or disable UI
      window.electron
        .print(receiptContent)
        .then(() => {
          new Notification('ogbikpos Print Job', {
            body: 'Receipt printing initiated successfully.',
          });
          setOrder([]); // Reset order state
          setPrinting(false); // Reset printing state after success
        })
        .catch((error) => {
          console.error('Print failed: ', error);
          new Notification('ogbikpos Print Job', {
            body: 'Failed to initiate receipt printing.',
          });
          setPrinting(false); // Reset printing state after failure
        });
    } else {
      console.error('Print function is not available');
    }
  };

  return (
    <div className="order">
      {order.length === 0 ? (
        <p className="text-lg text-black font-bold">No items in order</p>
      ) : (
        <div>
          <ul>
            {order.map((item) => (
              <li
                key={item.id}
                className="shadow-md cursor-pointer px-2 my-2 rounded-md"
              >
                <div className="flex flex-row justify-between items-center text-left">
                  <div>{item.name}</div>
                  <div>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </div>
                  <div>
                    <button
                      className="px-3 mx-3"
                      onClick={() => removeFromOrder(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button className="button" disabled={printing} onClick={handlePrint}>
            {printing ? 'Printing...' : 'Print Receipt'}
          </button>
          <div id="receipt" style={{ display: 'none' }}>
        
            <Receipt order={order}  taxRate={taxRate}  receiptNumber={RE001} issueDate={} seller={seller} buyer={buyer}  />
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
