// Skills.js
import styles from './Skills.module.css';

export default function Skills() {
  const skills = ["Python", "HTML", "CSS", "Javascript", "React", "NextJs"];
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>
        My Skills...
      </h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}