import { Course } from './../../core/models/course';
import { Course as CourseService } from './../../core/services/course';
import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CommonModule } from '@angular/common';
import { Modal } from '../../shared/components/modal/modal';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCard, Modal, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  selectedCourseId: string | null = null;
  isModalOpen: boolean = false;
  coursesList: Course[] = [];
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.coursesList = this.courseService.getCourses();
  }

  handleDelete(id: string) {
    this.selectedCourseId = id;
    this.isModalOpen = true;
  }

  confirmDeletion() {
    if (this.selectedCourseId) {
      this.courseService.deleteCourse(this.selectedCourseId);
      this.coursesList = this.courseService.getCourses();
      this.closeModal();
    }
  }
  closeModal() {
    this.isModalOpen = false;
    this.selectedCourseId = null;
  }
}
