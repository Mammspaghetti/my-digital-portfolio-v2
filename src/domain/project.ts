export interface Project {
  id: string
  title: string
  description: string
  stack: ReadonlyArray<string>
  repoUrl?: string
  demoUrl?: string
  docsUrl?: string
}
