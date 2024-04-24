import Link from 'next/link';

const Wishlist = () => {
  return (
    <div className="cart__footer">
      <div className="cart__actions">
        <Link className="button-black" href="/en/my-account/wishlist">
          View Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
