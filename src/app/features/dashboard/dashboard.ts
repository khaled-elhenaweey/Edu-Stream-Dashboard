import { Course } from './../../core/models/course';
import { Course as CourseService } from './../../core/services/course';
import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  coursesList: Course[] = [];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.coursesList = this.courseService.getCourses();
  }
}
