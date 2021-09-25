class CartItem {
  constructor(id, heading, price, quantity, sum, image, shippingStatus) {
    this.id = id;
    this.heading = heading;
    this.price = price;
    this.quantity = quantity;
    this.sum = sum;
    this.image = image;
    this.shippingStatus = shippingStatus;
  }
}

export default CartItem;
