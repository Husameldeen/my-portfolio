import styles from './SlideShowContent.module.css';

function SlideShowContent({ projectSlide }) {
  const showLink = projectSlide.projectLink.includes('#');

  return (
    <div className={styles.SlideShowContent}>
      <figure>
        <figcaption>
          <h3>{projectSlide.projectName}</h3>
          <div className={styles.row}>
            <span className={`${showLink ? styles.projectLink : ''}`}>
              <a href={projectSlide.projectLink} target="_blank">
                Preview : {projectSlide.projectLink}
              </a>
            </span>
          </div>
        </figcaption>

        <img src={`projects/${projectSlide.procetImage}.jpg`} alt={projectSlide.projectName} />
      </figure>
    </div>
  );
}

export default SlideShowContent;
