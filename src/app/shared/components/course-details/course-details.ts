import { CommonModule } from '@angular/common';
import { Course as CourseModel } from './../../../core/models/course';
import { Course } from './../../../core/services/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails implements OnInit {
  courseId: string | null = null;
  course: CourseModel | undefined;
  constructor(
    private route: ActivatedRoute,
    private courseService: Course,
  ) {}
  ngOnInit(): void {
    const id = (this.courseId = this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.course = this.courseService.getCourseById(id);
    }
  }
}
