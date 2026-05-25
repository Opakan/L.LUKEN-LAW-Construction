export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  completionYear: string;
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export interface ContactInquiry {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}
