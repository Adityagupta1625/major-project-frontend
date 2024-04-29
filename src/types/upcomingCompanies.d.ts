export interface UpcomingCompaniesDTO {
  _id: string;
  name: string;
  description: string;
  doc: string | null;
  courses: string[];
  departments: string[];
  deadline: Date;
}
