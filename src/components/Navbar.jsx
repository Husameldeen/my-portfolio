import { NavLink } from 'react-router-dom';
import { IoHome, IoChatbubbles } from 'react-icons/io5';
import { FaFolderOpen, FaUser, FaEnvelope, FaBars } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import styles from './Navbar.module.css';
import { useState } from 'react';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  console.log(isMobileNavOpen);
  return (
    <>
      <nav className={styles.deskNav}>
        <ul className={styles.deskNavList}>
          <NavLink to="/">
            <li>
              <IoHome />
              <p>Home</p>
            </li>
          </NavLink>
          <NavLink to="/about">
            <li>
              <FaUser />
              <p>About</p>
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>
              <FaFolderOpen />
              <p>Portfolio</p>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <FaEnvelope />
              <p>Contact</p>
            </li>
          </NavLink>
          <NavLink to="/blog">
            <li>
              <IoChatbubbles />
              <p>Blog</p>
            </li>
          </NavLink>
        </ul>
      </nav>
      <nav className={styles.mobileNav}>
        <div
          className={styles.mobileNavToggel}
          onClick={() => setIsMobileNavOpen((currentState) => !currentState)}
        >
          {isMobileNavOpen ? <RxCross2 /> : <FaBars />}
        </div>
        <div className={`${styles.mobileNavContainer} ${isMobileNavOpen ? styles.open : ''}`}>
          <ul className={styles.mobileList}>
            <NavLink to="/">
              <li>
                <IoHome />
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li>
                <FaUser />
                <p>About</p>
              </li>
            </NavLink>
            <NavLink to="/portfolio">
              <li>
                <FaFolderOpen />
                <p>Portfolio</p>
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li>
                <FaEnvelope />
                <p>Contact</p>
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li>
                <IoChatbubbles />
                <p>Blog</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
