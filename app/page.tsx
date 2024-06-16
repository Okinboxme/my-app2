'use client';
import React, { useState } from 'react';
import MenuItem from '@/components/menuitem/page';
import Order from '@/components/order/page';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

const App: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: 1, name: 'Burger', price: 5 },
    { id: 2, name: 'Pizza', price: 8 },
    { id: 3, name: 'Salad', price: 4 },
  ]);

  const [order, setOrder] = useState<OrderItem[]>([]);

  const addToOrder = (item: MenuItem) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );
      if (existingItem) {
        return prevOrder.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const removeFromOrder = (item: OrderItem) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );
      if (existingItem && existingItem.quantity === 1) {
        return prevOrder.filter((orderItem) => orderItem.id !== item.id);
      }
      return prevOrder.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      );
    });
  };

  return (
    <div className="App my-2 h-screen">
      <h1 className="text-lg font-bold text-black ">Ogbik Service POS</h1>
      <div className="menu flex flex-1 justify-items-center ">
        <h2 className="text-lg font-bold text-black">Menu</h2>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
        ))}
      </div>
      <div className="order">
        <h2 className="text-lg font-bold text-black">Order</h2>
        <Order
          setOrder={setOrder}
          order={order}
          removeFromOrder={removeFromOrder}
        />
      </div>
    </div>
  );
};

export default App;
