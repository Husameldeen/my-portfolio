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
      <ul className={isGalleryOpen ? `${styles.animatable}` : ''}>
        <li className={`${styles.current} ${isGalleryOpen ? `${styles.show}` : ''} ${styles.hide}`}>
          <SlideShowContent projectSlide={projectSlide} />
        </li>
      </ul>
      <nav>
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
