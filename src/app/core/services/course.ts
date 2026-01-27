import { Injectable } from '@angular/core';
import { Course as CourseModel } from '../models/course';
@Injectable({
  providedIn: 'root',
})
export class Course {
  private courses: CourseModel[] = [
    {
      id: '1',
      title: 'AI-Driven UI Design 2026',
      instructor: 'Dr. Sarah James',
      price: 199,
      duration: '18h 30m',
      level: 'Intermediate',
      status: 'Active',
      progress: 65,
      imageUrl: 'https://placehold.co/600x400/0f172a/3b82f6?text=AI+Design',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Advanced Tailwind 4 Masterclass',
      instructor: 'Alex Rivera',
      price: 149,
      duration: '12h 15m',
      level: 'Expert',
      status: 'Active',
      progress: 30,
      imageUrl: 'https://placehold.co/600x400/0f172a/06b6d4?text=Tailwind+4',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Angular Micro-frontends',
      instructor: 'Michael Chen',
      price: 299,
      duration: '24h 00m',
      level: 'Expert',
      status: 'Completed',
      progress: 100,
      imageUrl: 'https://placehold.co/600x400/0f172a/a855f7?text=Angular+Pro',
      rating: 5.0
    }
  ];

  constructor() { }
  getCourses(): CourseModel[] {
    return this.courses;
  }
  deleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== id)
    console.log(`Course with id ${id} deleted`);
  }
}
