import styles from './Skills.module.css';

const skills = [
  {
    skill: 'html',
    imgSource: 'html.png',
  },
  {
    skill: 'css',
    imgSource: 'css.png',
  },
  {
    skill: 'javascript',
    imgSource: 'js.png',
  },
  {
    skill: 'react',
    imgSource: 'react.png',
  },
  {
    skill: 'nextjs',
    imgSource: 'nextjs.png',
  },
  {
    skill: 'nodejs',
    imgSource: 'nodejs.png',
  },
  {
    skill: 'Git',
    imgSource: 'Git.png',
  },
  {
    skill: 'GitHub',
    imgSource: 'GitHub.png',
  },
  {
    skill: 'jquery',
    imgSource: 'jquery.png',
  },
];

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.smallTitle}>
        <h2>
          my <span>skills</span>
        </h2>
      </div>
      <div className={styles.imgContainer}>
        {skills.map((skill) => (
          <div className={styles.img} key={skill.skill}>
            <img src={skill.imgSource} alt={skill.skill} />
            <h6>{skill.skill}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
