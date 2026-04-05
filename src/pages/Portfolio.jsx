import { useEffect, useState } from 'react';
import Background from '../components/Background';
import SlideShow from '../components/SlideShow';
import Navbar from '../components/Navbar';
import styles from './Portfolio.module.css';

const projects = [
  {
    projectName: 'Smart Brain',
    projectLink: 'https://smart-brain-frontend-tau.vercel.app/',
    procetImage: 'smart-brain-logo',
  },
  {
    projectName: 'Weather App',
    projectLink: 'https://weatherapp-theta-vert.vercel.app/',
    procetImage: 'weather-app',
  },
  {
    projectName: 'backends',
    projectLink: 'www.#.com',
    procetImage: 'backends',
  },
  {
    projectName: 'database',
    projectLink: 'www.#.com',
    procetImage: 'database',
  },
  {
    projectName: 'React Quiz',
    projectLink: 'www.#.com',
    procetImage: 'react-quiz',
  },
  {
    projectName: 'Image Project 6',
    projectLink: 'www.#.com',
    procetImage: 'project-6',
  },
  {
    projectName: 'Image Project 7',
    projectLink: 'www.#.com',
    procetImage: 'project-7',
  },
  {
    projectName: 'Image Project 8',
    projectLink: 'www.#.com',
    procetImage: 'project-8',
  },
  {
    projectName: 'Image Project 9',
    projectLink: 'www.#.com',
    procetImage: 'project-9',
  },
];

function Portfolio() {
  const [isGalleryOpen, setIsGallaryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(null);

  function handleOpenGallery(i) {
    setIsGallaryOpen(true);
    setCurrentSlide(i);
  }

  function handleCloseGallery() {
    setIsGallaryOpen(false);
    setCurrentSlide(null);
  }

  function handleNextSlide() {
    if (currentSlide + 1 === projects.length) {
      setCurrentSlide(null);
      setIsGallaryOpen(false);
    } else {
      setCurrentSlide((current) => current + 1);
    }
  }

  function handlePrevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(null);
      setIsGallaryOpen(false);
    } else {
      setCurrentSlide((current) => current - 1);
    }
  }

  useEffect(
    function () {
      if (!isGalleryOpen) return;

      const handleKeyCode = (e) => {
        if (e.key === 'Escape') handleCloseGallery();
        if (e.keyCode === 39) handleNextSlide();
        if (e.keyCode === 37) handlePrevSlide();
      };

      document.addEventListener('keydown', handleKeyCode);
      return () => {
        document.removeEventListener('keydown', handleKeyCode);
      };
    },
    [isGalleryOpen, handleNextSlide, handlePrevSlide],
  );

  return (
    <div>
      <Background />
      <Navbar />
      <main className={`${styles.portfolioContainer} ${isGalleryOpen ? styles.slideshowOpen : ''}`}>
        <div className={styles.title}>
          <div className={styles.transperantTitle}>
            <h1>works</h1>
          </div>
          <div className={styles.bigTitle}>
            <h1>
              <span>portfolio</span>
            </h1>
          </div>
        </div>
        <section className={styles.mainContent}>
          <div className={styles.gridGallery}>
            <section className={styles.gridWrap}>
              <ul className={`${styles.row} ${styles.grid}`}>
                {projects.map((project, i) => (
                  <li key={project.procetImage}>
                    <figure>
                      <img
                        onClick={() => handleOpenGallery(i)}
                        src={`projects/${project.procetImage}.jpg`}
                        alt="Portfolio Image"
                      />
                      <div>
                        <span>{project.projectName}</span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
            <section className={styles.slideshow}>
              <SlideShow
                isGalleryOpen={isGalleryOpen}
                handleCloseGallery={handleCloseGallery}
                projectSlide={projects.at(currentSlide)}
                handleNextSlide={handleNextSlide}
                handlePrevSlide={handlePrevSlide}
              />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
