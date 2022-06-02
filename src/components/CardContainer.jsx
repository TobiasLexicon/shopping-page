import { productData } from '../data/productData';
import { CardContainerStyled } from '../styles/styledComponents';
import { Card } from './Card';

export const CardContainer = props => {
  return (
    <CardContainerStyled>
      {productData.map(product => (
        <Card {...product} handleBuy={props.handleBuy} key={product.id}></Card>
      ))}
    </CardContainerStyled>
  );
};
