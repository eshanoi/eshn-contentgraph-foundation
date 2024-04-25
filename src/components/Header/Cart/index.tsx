import Link from 'next/link';

const Cart = () => {
  return (
    <div className="cart-item-listing">
      <div className="cart__row">
        <p className="cart__heading">Cart</p>
      </div>

      <div className="cart__footer">
        <p className="cart__subtotal">
          {/* TODO: Update cart total items */}
          Subtotal (<span className="countItemCartHeader">0</span> items):{' '}
          {/* TODO: Update cart amount */}
          <span className="amountCartHeader">$0.00</span>
        </p>
        {/* TODO: Add cart items */}
        <div className="cart__items"></div>

        <div className="cart__actions">
          <Link className="button-transparent-black" href="/en/checkout/">
            Checkout
          </Link>
          <Link className="button-black" href="/en/cart/">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
