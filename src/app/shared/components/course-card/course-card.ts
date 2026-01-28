import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
}
