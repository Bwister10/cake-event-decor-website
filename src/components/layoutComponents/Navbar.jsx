import styles from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import logo from "../../assets/logoImage/Logo.png";

export default function NavBar() {
  //For the menu Icon
  const [nav, setNav] = useState(false);

  //For the showing the page thats active
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <div>
      <header className={styles.navbar}>
        <a href="/">
          {" "}
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
        </a>
        <nav>
          <ul
            className={
              nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
            }
          >
            <li className={activePath === "/" ? styles.active : ""}>
              <a href="/" exact="true">
                Home
              </a>
            </li>

            <li className={activePath === "/about-us" ? styles.active : ""}>
              <a href="/about-us">About</a>
            </li>

            <li className={activePath === "/services" ? styles.active : ""}>
              <a href="/services">Services </a>
            </li>

            <li className={activePath === "/gallery" ? styles.active : ""}>
              <a href="/gallery">Gallery </a>
            </li>

            <li className={activePath === "/contact-us" ? styles.active : ""}>
              <a href="/contact-us">Contact </a>
            </li>
          </ul>
        </nav>
        <div className={styles.menuIcons} onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </header>
    </div>
  );
}
