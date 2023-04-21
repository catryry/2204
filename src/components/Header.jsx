import React, { useEffect, useRef, useState } from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ImgHe1 from '../assets/img-header/tartaglia1.png'


const Header = () => {

  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeNavbar = () => {
    setIsNavOpen(false);
  }

  useEffect(() => {
    if (isNavOpen) {
      navRef.current.classList.add(styles.responsive_nav);
    } else {
      navRef.current.classList.remove(styles.responsive_nav);
    }
  }, [isNavOpen]);

  return (
    <header>
      <h2><img src={ImgHe1} alt="" style={{
        width: "3rem"
      }}/></h2>

      <nav ref={navRef}>

        <a onClick={closeNavbar}><Link to={routes.home}>Home</Link></a>
        <a onClick={closeNavbar}><Link to={routes.reminders}>Reminders</Link></a>
        <a onClick={closeNavbar}><Link to={routes.music}>Music</Link></a>
        <a onClick={closeNavbar}><Link to={routes.letters}>Letters</Link></a>
      

        <button className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

      </nav>

      <button className={styles.navBtn}
        onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

    </header>
  );
};

export default Header;
