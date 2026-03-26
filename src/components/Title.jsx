import styles from './Title.module.css';

function Title({ trancperant, title, span }) {
  return (
    <div className={styles.title}>
      <div className={styles.transperantTitle}>
        <h1>{trancperant}</h1>
      </div>
      <div className={styles.bigTitle}>
        <h1>
          {title} <span>{span}</span>
        </h1>
      </div>
    </div>
  );
}

export default Title;
