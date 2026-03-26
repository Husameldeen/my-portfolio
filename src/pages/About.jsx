import Background from '../components/Background';
import Card from '../components/Card';
import Education from '../components/Education';
import Navbar from '../components/Navbar';
import PersonalInfo from '../components/PersonalInfo';
import Skills from '../components/Skills';
import styles from './About.module.css';

function About() {
  return (
    <div>
      <Background />
      <Navbar />
      <PersonalInfo />
      <div className={styles.cardsContainer}>
        <Card number={2}>years of experience</Card>
        <Card number={10}>number of projects</Card>
        <Card number={5}>number of customers</Card>
      </div>
      <Skills />
    </div>
  );
}

export default About;
