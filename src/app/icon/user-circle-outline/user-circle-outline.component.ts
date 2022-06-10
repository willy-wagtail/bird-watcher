import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-circle-outline',
  templateUrl: './user-circle-outline.component.html',
  styleUrls: ['./user-circle-outline.component.scss']
})
export class UserCircleOutlineComponent implements OnInit {
  @Input() className: string = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
