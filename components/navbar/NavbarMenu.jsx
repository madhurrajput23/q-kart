import Link from "next/link";

import styles from "./Navbar.module.css";

function NavbarMenu() {
  return (
    <div className={styles.navbar__menu}>
      <Link href="/products" className={styles.navbar__menuItem}>
        Products
      </Link>
      <Link href="/cart" className={styles.navbar__menuItem}>
        Cart
      </Link>
      <Link href="/login" className={styles.navbar__menuItem}>
        Log-in
      </Link>
    </div>
  );
}

export default NavbarMenu;
