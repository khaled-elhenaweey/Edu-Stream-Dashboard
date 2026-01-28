import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../core/models/course';
import { CourseStatus } from '../../directives/course-status';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CourseStatus],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input({ required: true }) course!: Course;
  @Output() onDelete = new EventEmitter<string>();

  requestDelete() {
    this.onDelete.emit(this.course.id);
  }
}
