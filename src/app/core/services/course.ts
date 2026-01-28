import { Injectable } from '@angular/core';
import { Course as CourseModel } from '../models/course';
@Injectable({
  providedIn: 'root',
})
export class Course {
  private courses: CourseModel[] = [
    // --- Beginner Level ---
    {
      id: '1',
      title: 'Intro to UI/UX Design',
      instructor: 'Sarah James',
      price: 49,
      duration: '10h',
      level: 'Beginner',
      status: 'Active',
      progress: 40,
      imageUrl: 'https://placehold.co/600x400/0f172a/3b82f6?text=UI+Beginner',
      rating: 4.5,
    },
    {
      id: '2',
      title: 'HTML & CSS Basics',
      instructor: 'Alex Rivera',
      price: 29,
      duration: '8h',
      level: 'Beginner',
      status: 'Completed',
      progress: 100,
      imageUrl: 'https://placehold.co/600x400/0f172a/06b6d4?text=HTML+CSS',
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Digital Marketing 101',
      instructor: 'Emma Watson',
      price: 35,
      duration: '5h',
      level: 'Beginner',
      status: 'Archived',
      progress: 0,
      imageUrl: 'https://placehold.co/600x400/0f172a/f43f5e?text=Marketing',
      rating: 4.2,
    },

    // --- Intermediate Level ---
    {
      id: '4',
      title: 'Angular Components Pro',
      instructor: 'Michael Chen',
      price: 120,
      duration: '20h',
      level: 'Intermediate',
      status: 'Active',
      progress: 65,
      imageUrl: 'https://placehold.co/600x400/0f172a/a855f7?text=Angular+Int',
      rating: 4.8,
    },
    {
      id: '5',
      title: 'TypeScript Masterclass',
      instructor: 'John Doe',
      price: 95,
      duration: '15h',
      level: 'Intermediate',
      status: 'Completed',
      progress: 100,
      imageUrl: 'https://placehold.co/600x400/0f172a/10b981?text=TypeScript',
      rating: 4.7,
    },
    {
      id: '6',
      title: 'Node.js Backend Essentials',
      instructor: 'Kevin Mitnick',
      price: 110,
      duration: '18h',
      level: 'Intermediate',
      status: 'Archived',
      progress: 15,
      imageUrl: 'https://placehold.co/600x400/0f172a/ef4444?text=NodeJS',
      rating: 4.4,
    },

    // --- Expert Level ---
    {
      id: '7',
      title: 'AI & Machine Learning',
      instructor: 'Dr. Sarah Jenkins',
      price: 299,
      duration: '45h',
      level: 'Expert',
      status: 'Active',
      progress: 25,
      imageUrl: 'https://placehold.co/600x400/0f172a/eab308?text=AI+Expert',
      rating: 5.0,
    },
    {
      id: '8',
      title: 'Micro-frontends Architecture',
      instructor: 'Bruno Simon',
      price: 350,
      duration: '30h',
      level: 'Expert',
      status: 'Completed',
      progress: 100,
      imageUrl: 'https://placehold.co/600x400/0f172a/6366f1?text=Microservices',
      rating: 4.9,
    },
    {
      id: '9',
      title: 'Advanced Cybersecurity',
      instructor: 'Cyber Guru',
      price: 400,
      duration: '50h',
      level: 'Expert',
      status: 'Archived',
      progress: 5,
      imageUrl: 'https://placehold.co/600x400/0f172a/ec4899?text=Security',
      rating: 4.6,
    },
  ];

  constructor() {}
  getCourses(): CourseModel[] {
    return this.courses;
  }
  deleteCourse(id: string): void {
    this.courses = this.courses.filter((course) => course.id !== id);
    console.log(`Course with id ${id} deleted`);
  }
}
