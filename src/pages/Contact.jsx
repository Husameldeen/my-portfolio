import { FaEnvelope } from 'react-icons/fa6';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import styles from './Contact.module.css';
function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Background />
      <Navbar />
      <div className={styles.title}>
        <div className={styles.transperantTitle}>
          <h1>Contact</h1>
        </div>
        <div className={styles.bigTitle}>
          <h1>
            <span>Get in touch</span>
          </h1>
        </div>
      </div>
      <main className={styles.contactMain}>
        <section className={styles.leftSection}>
          <h2>Don't be shy !</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative
            ideas or opportunities to be part of your visions.
          </p>
          <div className={`${styles.contactInfo}`}>
            <div className={styles.icon}>
              <FaEnvelope />
            </div>
            <div className={styles.textPart}>
              <h4>mail me</h4>
              <p>
                <span>mhusam87@gmail.com</span>
              </p>
            </div>
          </div>
          <div className={`${styles.contactInfo}`}>
            <div className={styles.icon}>
              <FaEnvelope />
            </div>
            <div className={styles.textPart}>
              <h4>call me</h4>
              <p>
                <span>+249120927548</span>
              </p>
            </div>
          </div>
          <div className={styles.iconDiv}>
            <div>
              <FaEnvelope />
            </div>
            <div>
              <FaEnvelope />
            </div>
            <div>
              <FaEnvelope />
            </div>
            <div>
              <FaEnvelope />
            </div>
          </div>
        </section>
        <section className={styles.rightSection}>
          <form>
            <div>
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Your email" />
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <textarea type="text" placeholder="Your message" />
            </div>
            <button>send message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
