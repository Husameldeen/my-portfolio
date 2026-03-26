import styles from './Education.module.css';

function Education() {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.smallTitle}>
        <h2>
          education <span>&</span> experiance
        </h2>
      </div>
      <div className={styles.education}>
        <ul>
          <li>
            <p className={styles.date}>
              <span>apr 2023</span>
            </p>
            <p className={styles.mainPara}>
              <span>dal design and construction</span>
            </p>
            <p className={styles.para}>HSE officer at dal design and construction</p>
          </li>
          <li>
            <p className={styles.date}>
              <span>Aug 2022</span>
            </p>
            <p className={styles.mainPara}>
              <span>Asawer Oil and Gas</span>
            </p>
            <p className={styles.para}>HSE Engineer at Asawer Oil and Gas</p>
          </li>
          <li>
            <p className={styles.date}>
              <span>dec 2021</span>
            </p>
            <p className={styles.mainPara}>
              <span>Courses coordinator</span>
            </p>
            <p className={styles.para}>Bisco Training Centre</p>
          </li>
          <li>
            <p className={styles.date}>
              <span>2021</span>
            </p>
            <p className={styles.mainPara}>
              <span>nebosh</span>
            </p>
            <p className={styles.para}>
              Nebosh International General Certificate in Occupational Health and Safety
            </p>
          </li>
          <li>
            <p className={styles.date}>
              <span>2020</span>
            </p>
            <p className={styles.mainPara}>
              <span>petroleum engineering</span>
            </p>
            <p className={styles.para}>
              in dec 2020 i graduated as Petroleum engineer from Sudan University of Science and
              Technology
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
