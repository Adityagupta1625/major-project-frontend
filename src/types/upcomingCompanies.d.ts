export interface UpcomingCompaniesInterface {
  _id: string;
  name: string;
  description: string;
  doc: string;
}

export interface addUpcomingCompaniesInterface {
  name: string;
  description: string;
  doc: string | null;
}
