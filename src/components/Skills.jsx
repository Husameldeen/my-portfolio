import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.smallTitle}>
        <h2>
          my <span>skills</span>
        </h2>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src="html.png" alt="html" />
          <h6>html</h6>
        </div>
        <div className={styles.img}>
          <img src="css.png" alt="css" />
          <h6>css</h6>
        </div>
        <div className={styles.img}>
          <img src="js.png" alt="js" />
          <h6>javascript</h6>
        </div>
        <div className={styles.img}>
          <img src="react.png" alt="react" />
          <h6>react</h6>
        </div>
        <div className={styles.img}>
          <img src="jquery.png" alt="jquery" />
          <h6>jquery</h6>
        </div>
      </div>
    </div>
  );
}

export default Skills;
