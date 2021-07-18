import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges, ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pager',
  templateUrl: 'pager.component.html',
  styleUrls: ['./pager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagerComponent implements OnChanges {
  @Input() totalItems: number;
  @Input() pageSize = 100;
  @Input() currentPage = 0;
  @Output() pageChange = new EventEmitter<number>();

  @ViewChild('currentPageInput') currentPageInput: ElementRef<HTMLInputElement>;

  isEditingCurrentPage = false;

  currentPageControl = new FormControl();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentPage' in changes) {
      this.currentPageControl.setValue(this.currentPage + 1, { emitEvent: false });
      this.currentPageControl.setValidators([
        Validators.min(1),
        Validators.max(this.totalPages),
      ]);
    }
  }

  onPreviousPagePressed(): void {
    this.pageChange.emit(this.currentPage - 1);
  }

  onNextPagePressed(): void {
    this.pageChange.emit(this.currentPage + 1);
  }

  onCurrentPageLinkPressed(): void {
    this.isEditingCurrentPage = true;

    setTimeout(() => {
      this.currentPageInput.nativeElement.focus();
      this.currentPageInput.nativeElement.select();
    });
  }

  onPageControlFocusLost(): void {
    this.isEditingCurrentPage = false;
    this.currentPageControl.setValue(this.currentPage + 1);
  }

  onEnterPressed(): void {
    if (this.currentPageControl.invalid) {
      return;
    }

    const newPage = this.currentPageControl.value - 1;
    this.isEditingCurrentPage = false;

    this.pageChange.emit(newPage);
  }
}
