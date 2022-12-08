import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa"
const btnClick = () => {
  window.location.href = "/Signin";
};

// const toggleBtn = document.querySelector('.nav_toggleBtn');
// const menu = document.querySelector('.nav_menu');
// const links = document.querySelector('.nav_sign');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     links.classList.toggle('active');
// })

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a href="/">
          <img src="./logo.png" />
        </a>
        <ul className={styles.nav_menu}>
          <li>
            <a href="/Movies">Movies </a>
          </li>
          <li>
            <a href="/Actors"> Actors </a>
          </li>
          <li>
            <a href="/Directors">Directors</a>
          </li>
          <li>
            <a href="/Recommends">Recommends</a>
          </li>
        </ul>
        <ul className={styles.nav_sign}>
          <button type="button" onClick={btnClick}>
            Sign in
          </button>
        </ul>
        <a href="#" className={styles.nav_toggleBtn}><FaBars/></a>
      </nav>
    </header>
  );
};

export default Header;
