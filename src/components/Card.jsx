import styles from './Card.module.css';

function Card({ children, number }) {
  return (
    <div className={styles.dataCard}>
      <h1>{number}</h1>
      <h2>+</h2>
      <span>_________</span>
      <h3>{children}</h3>
    </div>
  );
}

export default Card;
