export const RemoveFromCart = (cartItems, ItemToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToDelete.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== ItemToDelete.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === ItemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
