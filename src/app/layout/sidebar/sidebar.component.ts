import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  cameras: any[] = [
    {id: 1, name: 'Camera 1'},
    {id: 2, name: 'Camera 2'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
