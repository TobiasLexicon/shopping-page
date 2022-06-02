import { Outlet } from 'react-router-dom';
import { LayoutContainer } from '../styles/styledComponents';

export const Layout = () => {
  return (
    <LayoutContainer>
      <h1>Welcome to the Candy Site</h1>

      <Outlet />
    </LayoutContainer>
  );
};
