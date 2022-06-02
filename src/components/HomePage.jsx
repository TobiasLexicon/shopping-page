import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardContainer } from './CardContainer';
import { UserHeader } from './UserHeader';

export const Homepage = () => {
  const [cart, setCart] = useState([]);

  const handleBuy = item => {
    setCart(old => {
      return [...old, { id: item.id, product: item.product }];
    });
  };

  const cart2 = useSelector(state => state.cart);
  return (
    <div>
      <UserHeader cart={cart2} />
      <CardContainer handleBuy={handleBuy} />
    </div>
  );
};
