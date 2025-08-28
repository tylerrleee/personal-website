// Hero.jsexport default function Hero() {
  import styles from './Hero.module.css';

  
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.textContainer}>
        <div>
          <h1 className={styles.heading4}>
            Yo...
          </h1>
          <h2 className="text-center text-emerald-500 text-5xl font-bold">
            My Portfolio Website
          </h2>
        </div>
        <p className="text-center">
          I am your friendly neighbourhood osm developer...
        </p>
      </div>
    </section>
  );
}