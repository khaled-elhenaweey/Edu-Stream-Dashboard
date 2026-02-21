import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course as CourseService } from '../../core/services/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse implements OnInit {
  courseForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
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
