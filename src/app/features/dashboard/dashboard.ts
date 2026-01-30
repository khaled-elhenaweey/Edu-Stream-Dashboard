import { Course } from './../../core/models/course';
import { Course as CourseService } from './../../core/services/course';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CommonModule } from '@angular/common';
import { Modal } from '../../shared/components/modal/modal';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCard, Modal, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, AfterViewChecked {
  selectedCourseId: string | null = null;
  isModalOpen: boolean = false;
  coursesList: Course[] = [];
  private hasFocused = false;

  @ViewChild('confirmBtn') confirmBtn!: ElementRef;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.coursesList = this.courseService.getCourses();
  }

  ngAfterViewChecked(): void {
    if (this.confirmBtn && !this.hasFocused) {
      this.applyFoucs();
      this.hasFocused = true;
    }

    if (!this.confirmBtn && this.hasFocused) {
      this.hasFocused = false;
    }
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
  applyFoucs() {
    this.confirmBtn.nativeElement.focus();
    this.confirmBtn.nativeElement.style.border = '2px solid white';
  }
}
