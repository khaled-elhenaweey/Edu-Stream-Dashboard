import { Course } from './../../core/models/course';
import { Course as CourseService } from './../../core/services/course';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, OnChanges {
  coursesList: Course[] = [];
  constructor(private courseService: CourseService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.resetCourses();
  }

  ngOnInit(): void {
    this.coursesList = this.courseService.getCourses();
  }

  handleDelete(id: string) {
    this.courseService.deleteCourse(id);
    this.coursesList = this.courseService.getCourses();
  }
  resetCourses() {
    this.coursesList = this.courseService.getCourses();
  }
}
