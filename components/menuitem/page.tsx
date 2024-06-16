import React from 'react';

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    price: number;
  };
  addToOrder: (item: { id: number; name: string; price: number }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToOrder }) => {
  return (
    <div className="menu-item shadow-md cursor-pointer rounded-md outline-4 outline-blue-400">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
};

export default MenuItem;
