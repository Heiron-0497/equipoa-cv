interface About {
  name: string;
  surname: string;
  description: string;
  birthdate: Date;
  birthPlace: Date;
  gender: 'M' | 'F';
  profileImage?: string; // url
}

interface Skill {
  field: string; // to group the skills by field
  name: string;
  power: number; // between 1 and 100
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
  title: string;
  releaseDate: Date;
  expiringDate?: string;
  company: string;
}

interface Experience {
  startDate: Date;
  endDate?: Date;
  position: string;
  company: string;
  address: string;
}

interface Project {
  name: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

interface Language {
  name: string;
  level: {
    read: LanguageLevel;
    write: LanguageLevel;
    listen: LanguageLevel;
  }; // assuming 1 to 10
}

interface Education {
  title: string;
  releaseDate: Date;
  expiringDate?: string;
  school: string;
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
