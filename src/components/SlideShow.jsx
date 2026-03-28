import styles from './SlideShow.module.css';

function slideshow({ isGalleryOpen, handleCloseGallery, projectSlide }) {
  console.log(projectSlide);
  return (
    <>
      <ul className={isGalleryOpen ? `${styles.animatable}` : ''}>
        <li className={`${styles.current} ${isGalleryOpen ? `${styles.show}` : ''} ${styles.hide}`}>
          <figure>
            <figcaption>
              <h3>{projectSlide.projectName}</h3>
              <div className={styles.row}>
                <span className={`${styles['ft-wt-600']}`}>
                  <a href={projectSlide.link} target="_blank">
                    Preview : {projectSlide.link}
                  </a>
                </span>
              </div>
            </figcaption>

            <img src={`projects/${projectSlide.procetImage}.jpg`} alt={projectSlide.projectName} />
          </figure>
        </li>
      </ul>
      <nav>
        <span className={`${styles.icon} ${styles.navPrev}`}>
          <img src="projects/navigation/left-arrow.png" alt="previous" />
        </span>
        <span className={`${styles.icon} ${styles.navNext}`}>
          <img src="projects/navigation/right-arrow.png" alt="next" />
        </span>
        <span className={`${styles.navClose}`} onClick={handleCloseGallery}>
          <img src="projects/navigation/close-button.png" alt="close" />
        </span>
      </nav>
    </>
  );
}

export default slideshow;
