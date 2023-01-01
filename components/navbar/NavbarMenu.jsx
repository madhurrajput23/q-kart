import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { useAuth } from "../../contexts/auth-context";

function NavbarMenu() {
  const { isLogin } = useAuth();
  return (
    <div className={styles.navbar__menu}>
      <Link href="/cart" className={styles.navbar__menuItem}>
        <FaShoppingCart />
      </Link>
      <Link href="/wishlist" className={styles.navbar__menuItem}>
        <FaHeart />
      </Link>
      <Link href="/auth" className={styles.navbar__menuItem}>
        {isLogin ? <BiLogOut /> : <BiLogIn />}
      </Link>
    </div>
  );
}

export default NavbarMenu;
