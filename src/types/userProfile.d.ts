export interface UserProfile {
  userId: string;
  name: string | null;
  rollNo: string | null;
  department: string | null;
  batch: string | null;
  _id?: string;
  course: string | null;
}
