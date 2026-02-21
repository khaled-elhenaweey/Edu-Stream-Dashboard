export type CourseLevel = 'Beginner' | 'Intermediate' | 'Expert';
export type CourseStatus = 'Active' | 'Completed' | 'Archived';
export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  duration: string;
  level: CourseLevel;
  status: CourseStatus;
  progress: number;
  imageUrl: string;
  rating: number;
  createdAt: Date;
}
