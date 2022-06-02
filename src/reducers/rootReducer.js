export const rootReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'buy': {
      const cart = state.cart ? [...state.cart] : [];
      cart.push({ ...action.payload });
      return { ...state, cart };
    }
    default:
      return { ...state };
  }
};
