  import styles from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h3 className={styles.tyler}>
          Tyler Le
        </h3>
        <ul className={styles.container}>
          
            <a className={styles.link} href="#about">
              About
            </a>
          
            <a className={styles.link} href="#skills">
              Skills
            </a>
            <a className={styles.link} href="#projects">
              Projects
            </a>
          <li>
            <a className={styles.link} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}