export interface addPlacementFormInterface {
  title: string;
  courses: string[];
  departments: string[];
  deadline: Date;
}

export interface PlacementFormInterface {
  title: string;
  courses: string[];
  departments: string[];
  deadline: Date;
  _id: string;
  formId: string;
}
