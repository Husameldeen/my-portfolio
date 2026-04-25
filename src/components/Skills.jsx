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
    skill: 'TypeScript',
    imgSource: 'TypeScript.png',
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
    skill: 'Express',
    imgSource: 'Express.png',
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
  {
    skill: 'npm',
    imgSource: 'npm.png',
  },
  {
    skill: 'Tailwind css',
    imgSource: 'Tailwind CSS.png',
  },
  {
    skill: 'Redux',
    imgSource: 'Redux.png',
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
