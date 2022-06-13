import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  cameras: any[] = [
    { id: 1, name: 'Camera 1' },
    { id: 2, name: 'Camera 2' },
  ];

  @Output() onCollapse: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: any): void {
    console.log('mouseenter', $event);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave($event: any): void {
    console.log('mouseleave', $event);
  }

}
