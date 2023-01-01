import NavbarMenu from "./NavbarMenu";
import styles from "./Navbar.module.css";

function Navbar() {

  return (
    <nav className={styles.navbar}>
        <div className={styles.brandName}>Q-Kart</div>
        <NavbarMenu />
    </nav>
  );
}

export default Navbar;
