// About.js
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageContainer}>
        <img
          src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
          alt="About"
          className={styles.image}
        />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h2 className={styles.heading}>
            About Me :
          </h2>
        </div>
        <p>
          As I said, I am your friendly neighbourhood osm developer...
        </p>
        <p>
          I am a passionate self taught developer (which is quite a subjective thing as i learnt from teachers on youtube so does that really counts? idk). I am having an experience of about 4 years and had a deep understanding of creating web products.
        </p>
      </div>
    </section>
  );
}