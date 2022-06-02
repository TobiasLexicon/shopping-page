import './App.css';

import { ShoppingCart } from './components/ShoppingCart';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Homepage } from './components/HomePage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';

function App() {
  const store = configureStore({ reducer: rootReducer });

  return (
    <div className='App'>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/shoppingcart' element={<ShoppingCart />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
