import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <div>
      <Background />
      <Navbar />
      <main className={styles.portfolioContainer}>
        <div className={styles.title}>
          <div className={styles.transperantTitle}>
            <h1>works</h1>
          </div>
          <div className={styles.bigTitle}>
            <h1>
              <span> portfolio</span>
            </h1>
          </div>
        </div>
        <section className={styles.mainContent}>
          <div className={styles.gridGallery}>
            <section className={styles.gridWrap}>
              <ul className={`${styles.row} ${styles.grid}`}>
                <li>
                  <figure>
                    <img src="projects/project-1.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-2.jpg" alt="Portolio Image" />
                    <div>
                      <span>Youtube Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-3.jpg" alt="Portolio Image" />
                    <div>
                      <span>Slider Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-4.jpg" alt="Portolio Image" />
                    <div>
                      <span>Local Video Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-5.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-6.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-7.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-8.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>

                <li>
                  <figure>
                    <img src="projects/project-9.jpg" alt="Portolio Image" />
                    <div>
                      <span>Image Project</span>
                    </div>
                  </figure>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
