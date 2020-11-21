import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event: any) {
    $event.preventDefault();
    $event.target.classList.remove("drop-active");
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: any) {
    $event.preventDefault();
    $event.target.classList.add("drop-active");
    this.hovered.emit(true);
    $event.tar
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: any) {
    $event.preventDefault();
    $event.target.classList.remove("drop-active");
    this.hovered.emit(false);
  }

}
