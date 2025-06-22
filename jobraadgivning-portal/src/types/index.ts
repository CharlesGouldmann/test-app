export interface Candidate {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  address: string;
  advisor: string;
  country: 'dk' | 'no' | 'se' | 'fi';
  language: string;
  image: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  postedDate: Date;
}