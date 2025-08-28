// Contact.js
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>
        Contact
      </h2>
      <div className={styles.linkContainer}>
        <a
          rel="noreferrer"
          target="_blank"
          className={styles.link}
          href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgeeks_for_geeks%2F&is_from_rle"
        >
          Instagram:
          <span className={styles.bold}>
            @geeks_for_geeks
          </span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className={styles.link}
          href="https://twitter.com/geeksforgeeks"
        >
          Twitter:
          <span className={styles.bold}>
            @geeksforgeeks
          </span>
        </a>
      </div>
    </section>
  );
}