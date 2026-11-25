import type { Project } from '../../domain/project.ts'

/** Placeholder data: replace with your real projects. */
export const projects: ReadonlyArray<Project> = [
  {
    id: 'task-manager',
    title: 'Gestionnaire de projets et tâches',
    description:
      'TaskFlow : outil multi-utilisateurs de gestion de projets et de tâches (kanban, membres, rôles globaux et par projet). Objectif : illustrer une architecture full-stack propre, sécurisée et testée — authentification JWT, RBAC, API REST OpenAPI, Clean Architecture vérifiée par ArchUnit, tests automatisés et CI/CD.',
    stack: [
      'React',
      'TypeScript',
      'Java 21',
      'Spring Boot',
      'MySQL',
      'API REST',
      'RBAC',
      'Clean Architecture',
      'Docker',
      'CI/CD',
    ],
    repoUrl: 'https://github.com/Mammspaghetti/project-management-Saas',
    // TODO: renseigner demoUrl une fois le projet déployé en ligne.
    docsUrl: 'https://github.com/Mammspaghetti/project-management-Saas/blob/main/docs/guide.html',
  },
  {
    id: 'kaomoji',
    title: 'Gestionnaire de projets et tâches',
    description:
      'TaskFlow : outil multi-utilisateurs de gestion de projets et de tâches (kanban, membres, rôles globaux et par projet). Objectif : illustrer une architecture full-stack propre, sécurisée et testée — authentification JWT, RBAC, API REST OpenAPI, Clean Architecture vérifiée par ArchUnit, tests automatisés et CI/CD.',
    stack: [
      'React',
      'TypeScript',
      'Java 21',
      'Spring Boot',
      'MySQL',
      'API REST',
      'RBAC',
      'Clean Architecture',
      'Docker',
      'CI/CD',
    ],
    repoUrl: 'https://github.com/Mammspaghetti/Kaomoji',
    demoUrl: 'https://mammspaghetti.github.io/Kaomoji/',
    docsUrl: 'https://github.com/Mammspaghetti/Kaomoji/docs/'
  },
]
