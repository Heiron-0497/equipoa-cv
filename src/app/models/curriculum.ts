interface About {
  name: string;
  surname: string;
  description: string;
  birthdate: Date;
  birthPlace: Date;
  gender: 'M' | 'F';
}

interface Skill {
}

interface Social {
  name: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
  profileUrl: string;
}

interface Contact {
  email?: string;
  mobile?: string;
  address?: string;
  socials?: Array<Social>
}

interface Certification {
}

interface Experience {
}

interface Project {
}

interface Language {
}

interface Education {
}

export interface Curriculum {
  about: About;
  skills: Array<Skill>;
  contact: Contact;
  education: Array<Education>;
  experiences?: Array<Experience>
  certifications?: Array<Certification>;
  projects?: Array<Project>;
  languages: Array<Language>;
}
