import { Link } from 'react-router'
import { ProjectCard } from '../features/projects/ProjectCard.tsx'
import { projects } from '../features/projects/projects.ts'
import styles from './ProjectsPage.module.css'

export function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          ← Home
        </Link>
        <h1 className={styles.title}>Projets</h1>
      </header>

      <section className={styles.grid} aria-label="Liste des projets">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  )
}
