import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { useAuth } from "../../contexts/auth-context";
import Wishlist from "../../pages/wishlist";
import { useProduct } from "../../contexts/product-context";

function NavbarMenu() {
  const { isLogin } = useAuth();
  const { productList } = useProduct();
  const cartList = productList.filter((product) => product.cartCount > 0);
  const wishlistProduct = productList.filter(
    (product) => product.inWishlist === true
  );
  return (
    <div className={styles.navbar__menu}>
      {isLogin && (
        <>
          <Link href="/cart" className={styles.navbar__menuItem}>
            <FaShoppingCart />
            <div className={styles.badge}>{cartList.length}</div>
          </Link>
          <Link href="/wishlist" className={styles.navbar__menuItem}>
            <FaHeart />
            <div className={styles.badge}>{wishlistProduct.length}</div>
          </Link>
        </>
      )}

      <Link href="/auth" className={styles.navbar__menuItem}>
        {isLogin ? <BiLogOut /> : <BiLogIn />}
      </Link>
    </div>
  );
}

export default NavbarMenu;
