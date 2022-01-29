export interface Link {
  image: string;
  name: string;
  description: string;
  url: string;
}

export interface Patch {
  version: number[];
  suffix?: string;
  date: string;
  time: string;
  notes: string[];
}

export interface ProjectSite {
  icon: string;
  url: string;
}

export interface Project {
  name: string;
  month: string;
  description: string;
  sites: ProjectSite[];
}
