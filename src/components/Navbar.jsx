import { NavLink } from 'react-router-dom';
import { IoHome, IoChatbubbles } from 'react-icons/io5';
import { FaFolderOpen, FaUser, FaEnvelope } from 'react-icons/fa6';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
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
  );
}

export default Navbar;
