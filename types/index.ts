export interface Profile {
  name: string
  title: string
  tagline: string
  about: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  cv_url: string
}

export interface Skill {
  name: string
  icon: string
  color: string
}

export interface SkillsData {
  title: string
  subtitle: string
  skills: Skill[]
}

export interface Project {
  id: number
  title: string
  description: string
  image_url: string
  images: string[]
  technologies: string[]
  live_site_url: string
  github_url: string
  featured: boolean
}

export interface Article {
  id: number
  title: string
  summary: string
  publication_date: string
  article_url: string
}
