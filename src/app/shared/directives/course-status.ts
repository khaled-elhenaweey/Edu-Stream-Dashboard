import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCourseStatus]',
})
export class CourseStatus implements OnChanges {
  @Input('appCourseStatus') status!: string;

  @HostBinding('style.filter') filter: string = '';
  @HostBinding('style.opacity') opacity: string = '1';
  @HostBinding('style.boxShadow') shadow: string = '';
  @HostBinding('style.transition') transition: string = 'all 0.4s ease';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.updateStyles();
    }
  }

  private updateStyles(): void {
    if (this.status === 'Archived') {
      this.filter = 'grayscale(100%)';
      this.opacity = '0.6';
    } else {
      this.filter = 'none';
      this.opacity = '1';
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.shadow = this.getGelowColor();

    if (this.status === 'Archived') {
      this.opacity = '1';
    }
  }

  @HostListener('mouseleave') onmouseLeave() {
    this.shadow = '';

    if (this.status === 'Archived') {
      this.opacity = '0.6';
    }
  }

  private getGelowColor(): string {
    switch (this.status) {
      case 'Completed':
        return '0 0 25px rgba(34, 197, 94, 0.4)';
      case 'Active':
        return '0 0 25px rgba(59, 130, 246, 0.4)';
      case 'Archived':
        return '0 0 25px rgba(156, 163, 175, 0.3)';
      default:
        return '';
    }
  }
}
