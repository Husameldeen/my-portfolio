import { useEffect, useState } from 'react';
import Background from '../components/Background';
import SlideShow from '../components/SlideShow';
import Navbar from '../components/Navbar';
import styles from './Portfolio.module.css';

const projects = [
  {
    projectName: 'Image Project 1',
    projectLink: 'www.#.com',
    procetImage: 'project-1',
  },
  {
    projectName: 'Image Project 2',
    projectLink: 'www.#.com',
    procetImage: 'project-2',
  },
  {
    projectName: 'Image Project 3',
    projectLink: 'www.#.com',
    procetImage: 'project-3',
  },
  {
    projectName: 'Image Project 4',
    projectLink: 'www.#.com',
    procetImage: 'project-4',
  },
  {
    projectName: 'Image Project 5',
    projectLink: 'www.#.com',
    procetImage: 'project-5',
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
    }
    setCurrentSlide((current) => current + 1);
  }

  function handlePrevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(null);
      setIsGallaryOpen(false);
    }
    setCurrentSlide((current) => current - 1);
  }

  useEffect(
    function () {
      if (!isGalleryOpen) return;

      const handleEscKey = (e) => {
        if (e.key === 'Escape') handleCloseGallery();
      };

      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    },
    [isGalleryOpen],
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
                        alt="Portolio Image"
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
