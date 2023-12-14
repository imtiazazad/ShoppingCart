
const ShoppingCart = require('../main/task1');


describe('ShoppingCart', () => {
  test('should add an item to the cart and increase item count', () => {
    const cart = new ShoppingCart();

    // Ensure the cart is initially empty
    expect(cart.getItemCount()).toBe(0);

    // Add an item to the cart
    const item = { name: 'Item 1', price: 20.0 };
    cart.addItem(item);

    // After adding an item, the cart should not be empty
    expect(cart.getItemCount()).toBe(1);
  });
});
