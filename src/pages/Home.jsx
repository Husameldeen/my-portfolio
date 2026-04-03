import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';

import Background from '../components/Background';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Background />
      <Navbar />
      <main className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img src="/bg.jpg" alt="background-image" />
        </div>
        <div className={styles.rightContainer}>
          <h2>Hi There!</h2>
          <h1>
            I'm <span>Husameldeen Mustafa</span>
          </h1>
          <h3>
            Full Stack Developer with fundamental knowledge of HTML, CSS, JS, TypeScript, REACT,
            React 3rd part liberaries, Node.js, Express.js
          </h3>
          <div className={styles.btnContainer}>
            <Link to="/about">
              <button className={styles.btn}>
                <FaUser />
                <span>More About me</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
Home;
