export interface addAnnoucementsInterface {
  title: string;
  description: string;
  doc: string | null;
}

export interface AnnoucementsInterface {
  title: string;
  description: string;
  doc: string;
  _id: string;
  createdAt: Date;
}
