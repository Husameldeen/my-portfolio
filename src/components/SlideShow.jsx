import styles from './SlideShow.module.css';
import SlideShowContent from './SlideShowContent';

function slideshow({
  isGalleryOpen,
  handleCloseGallery,
  projectSlide,
  handleNextSlide,
  handlePrevSlide,
}) {
  return (
    <>
      <ul
        className={`${styles.slideshowComponent} ${isGalleryOpen ? styles.animatable : ''}`}
        // onClick={handleCloseGallery}
      >
        <li className={`${styles.current} ${isGalleryOpen ? styles.show : ''}`}>
          <SlideShowContent projectSlide={projectSlide} />
        </li>
        <li className={styles.hide}>
          <SlideShowContent projectSlide={projectSlide} />
        </li>
      </ul>
      <nav className={styles.slideshowNav}>
        <span className={`${styles.icon} ${styles.navPrev}`} onClick={() => handlePrevSlide()}>
          <img src="projects/navigation/left-arrow.png" alt="previous" />
        </span>
        <span className={`${styles.icon} ${styles.navNext}`} onClick={() => handleNextSlide()}>
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
