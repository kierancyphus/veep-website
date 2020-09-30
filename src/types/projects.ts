export interface WithKey {
  key: string
}

export enum Projects {
  COMMUNITY,
  CLUBS,
  RESEARCH,
}

export interface WithProjectType {
  projectType: Projects
}

export interface WithProjectTypeSetter {
  setProjectType: React.Dispatch<React.SetStateAction<Projects>>
}

export const projectTypeToStringMap = {
  [Projects.COMMUNITY]: 'Community',
  [Projects.CLUBS]: 'Campus Clubs',
  [Projects.RESEARCH]: 'Research',
}

export enum Tech {
  C = 'C',
  CSS = 'CSS',
  EXCEL = 'Excel',
  HTML = 'HTML',
  JAVA = 'Java',
  JAVASCRIPT = 'JavaScript',
  MSACCESS = 'MS Access',
  NODE = 'Node.js',
  POSTGRES = 'PostgreSQL',
  PYTHON = 'Python',
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  SQL = 'SQL',
  TYPESCRIPT = 'TypeScript',
  MONGODB = 'MongoDB',
  REDUX = 'Redux',
  FLASK = 'Flask',
}

export enum Roles {
  DESIGNER = 'Designer',
  FRONTEND_DEV = 'Frontend Developer',
  FULLSTACK_DEV = 'Fullstack Developer',
  BACKEND_DEV = 'Backend Developer',
  ANALYST = 'Analyst',
}
