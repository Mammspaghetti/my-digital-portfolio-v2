import { Link } from 'react-router'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Guillaume Pitis</h1>
      <p className={styles.role}>Software Engineer</p>
      <p className={styles.intro}>Une phrase de positionnement : ce que tu fais, pour qui.</p>

      <Link to="/projects" className={styles.cta}>
        Voir les projets →
      </Link>
    </main>
  )
}
