// Projects.js
import styles from './Project.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>
        My Projects
      </h2>
      <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
          <a href="https://www.geeksforgeeks.org/reactjs/progress-tracker-using-react-and-local-storage/" className="w-full h-full">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
              alt="Project 1"
              className={styles.image}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            <a className={styles.titleLink} href="https://www.geeksforgeeks.org/reactjs/progress-tracker-using-react-and-local-storage/">
              DSA Progress Tracker
            </a>
          </h2>
          <p>
            This is a project built on react which tracks your progess in dsa and stores that in the local storage.
          </p>
        </div>
      </div>
      <div className={styles.projectCardReverse}>
        <div className={styles.imageContainer}>
          <a href="https://www.geeksforgeeks.org/reactjs/15-puzzle-game-using-reactjs/" className="w-full h-full">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
              alt="Project 2"
              className={styles.image}
            />
          </a>
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>
            <a className={styles.titleLink} href="https://www.geeksforgeeks.org/reactjs/15-puzzle-game-using-reactjs/">
              15 Puzzle Game
            </a>
          </h2>
          <p>
            15 puzzle game is basically a tile-based game in which there are 16 tiles out of which 1 tile is left empty and the remaining tiles are filled with numbers from 1 to 15 in random order. The user has to arrange all the tiles in numerical order with the rule that they can only move the tile that is a direct neighbor of the empty tile.
          </p>
        </div>
      </div>
    </section>
  );
}