import styles from './PersonalInfo.module.css';
import Title from './Title';

function PersonalInfo() {
  return (
    <div className={styles.infoContainer}>
      <Title trancperant={'About me'} title={'about'} span={'me'} />
      <div className={styles.smallTitle}>
        <h2>personal infos</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.leftInfo}>
          <h3>
            first name: <span>husameldeen</span>
          </h3>
          <h3>
            last name: <span>mustafa</span>
          </h3>
          <h3>
            age: <span>30 years</span>
          </h3>
          <h3>
            nationality: <span>sudanese</span>
          </h3>
        </div>
        <div className={styles.rightInfo}>
          <h3>
            address: <span>Khartoum state, sudan</span>
          </h3>
          <h3>
            Phone: <span>+249120927548</span>
          </h3>
          <h3 className={styles.email}>
            email: <span>mhusam87@gmail.com</span>
          </h3>
          <h3>
            languages: <span>arabic, english</span>
          </h3>
        </div>
      </div>
      <button className={styles.downloadBtn}>download cv</button>
    </div>
  );
}

export default PersonalInfo;
