import { Link } from 'react-router-dom';
import { ShoppingCartStyled } from '../styles/styledComponents';

export const UserHeader = props => {
  return (
    <div>
      <Link to={'/shoppingcart'}>
        <ShoppingCartStyled>
          <h2>Shopping Cart</h2>
          <p>{props.cart ? props.cart.length : '0'}</p>
        </ShoppingCartStyled>
      </Link>
    </div>
  );
};
