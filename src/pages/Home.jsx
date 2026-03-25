import { Link } from 'react-router-dom';
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
          <Link to="/about">
            <button className={styles.btn}>More About me</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
Home;
