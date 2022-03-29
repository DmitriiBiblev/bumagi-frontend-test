import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  private readonly element: HTMLDivElement;

  constructor(
    private dialogService: DialogService,
    private elementRef: ElementRef<HTMLDivElement>,
  ) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
    this.dialogService.add(this);
  }

  ngOnDestroy(): void {
    this.dialogService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('dialog-opened');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-opened');
  }
}
