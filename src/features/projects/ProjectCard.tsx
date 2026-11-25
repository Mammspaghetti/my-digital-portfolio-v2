import type { Project } from '../../domain/project.ts'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, repoUrl, demoUrl, docsUrl } = project

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <ul className={styles.stack} aria-label="Technologies">
        {stack.map((tech) => (
          <li key={tech} className={styles.badge}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Code ↗
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Démo ↗
          </a>
        )}
        {docsUrl && (
          <a href={docsUrl} target="_blank" rel="noreferrer" className={styles.link}>
            Docs ↗
          </a>
        )}
      </div>
    </article>
  )
}
