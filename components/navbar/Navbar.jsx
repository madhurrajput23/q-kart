import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandName}>
        <Link href="/products" className={styles.navbar__menuItem}>
          Q-Kart
        </Link>
      </div>
      <NavbarMenu />
    </nav>
  );
}

export default Navbar;
