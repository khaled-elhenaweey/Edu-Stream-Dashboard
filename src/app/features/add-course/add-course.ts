import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Course as CourseService } from '../../core/services/course';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseLevel, CourseStatus } from '../../core/models/course';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse implements OnInit {
  courseForm!: FormGroup;
  levels: CourseLevel[] = ['Beginner', 'Intermediate', 'Expert'];
  statuses: CourseStatus[] = ['Active', 'Completed', 'Archived'];
  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
  ) {}

  forbiddenWordsValidator(control: AbstractControl): ValidationErrors | null {
    const forbiddenWords = ['test', 'dummy', 'spam'];
    const value = control.value?.toLowerCase();
    const isForbidden = forbiddenWords.some((word) => value?.includes(word));
    return isForbidden ? { forbiddenName: { vlaue: control.value } } : null;
  }
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), this.forbiddenWordsValidator]],
      instructor: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(10)]],
      level: ['Beginner', [Validators.required]],
      status: ['Active', [Validators.required]],
      imageUrl: ['https://placehold.co/600x400?text=New+Course', [Validators.required]],
    });
  }
  onSubmit(): void {
    if (this.courseForm.valid) {
      const newCourse = {
        ...this.courseForm.value,
        id: Math.random().toString(36).substring(2, 9),
        progress: 0,
        rating: 0,
        createdAt: new Date(),
        duration: '0h',
      };
      this.courseService.addCourse(newCourse);
      this.router.navigate(['/dashboard']);
    }
  }
}
