export type CompanyColor = {
  primary: string;
  background?: string;
  text?: string;
};

export interface Company {
  name: string;
  logo: string;
  color: CompanyColor;
}

export interface ExperienceItem {
  title: string;
  company: Company;
  duration: {
    begin: Date;
    end: Date | null;
  };
  details: string;
  fullTime: boolean;
  items?: string[];
  projects?: string[];
  color?: string;
}
