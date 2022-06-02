import { useDispatch } from 'react-redux';
import { CardStyled } from '../styles/styledComponents';

export const Card = ({ id, product, description, price, stock, handleBuy }, props) => {
  const dispatch = useDispatch();
  return (
    <CardStyled>
      <h2>{product}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
      <span>Stock: {stock}</span>
      <img src={`./img/${id}.png`} alt='candy' />

      <button onClick={() => dispatch({ type: 'buy', payload: { product, price } })}>Buy</button>
    </CardStyled>
  );
};
