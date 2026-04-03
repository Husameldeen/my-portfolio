import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcOk } from 'react-icons/fc';
import { FaXTwitter, FaArrowRotateRight } from 'react-icons/fa6';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import styles from './Contact.module.css';

function Contact() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const form = useRef();

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !name || !message || !email) return;

    setIsLoading(true);
    setErrorMessage(false);

    const templateParams = {
      title,
      name,
      message,
      email,
    };

    await emailjs
      .send('service_ii61cxt', 'template_82b2fwf', templateParams, 'IiwLtvBqPmy16I7Ie')
      .then(
        () => {
          console.log('Email sent');
          setIsLoading(false);
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 2000);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 2000);
        },
      );
  }

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
              <FaEnvelopeOpen />
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
              <FaPhoneSquareAlt />
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
              <FaFacebookF />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </section>
        <section className={styles.rightSection}>
          <form ref={form} onSubmit={(e) => handleFormSubmit(e)}>
            <div className={styles.inputFields}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className={styles.btnSendMessage}>
              SEND MESSAGE
              <span>
                {isLoading && (
                  <div className={styles.waiting}>
                    <FaArrowRotateRight />
                  </div>
                )}
                {successMessage && (
                  <div className={styles.success}>
                    <FcOk />
                  </div>
                )}
                {errorMessage && (
                  <div className={styles.failed}>
                    <MdCancel />
                  </div>
                )}
              </span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
