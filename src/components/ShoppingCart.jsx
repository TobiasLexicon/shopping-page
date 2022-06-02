import { useSelector } from 'react-redux';
import { productData } from '../data/productData';
import { Row } from '../styles/styledComponents';

export const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <Row key={item.id}>
          <h3>{item.product}</h3>
          <h4>{item.price}</h4>
        </Row>
      ))}
    </div>
  );
};
