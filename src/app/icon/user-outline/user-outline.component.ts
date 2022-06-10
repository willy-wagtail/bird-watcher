import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-outline',
  templateUrl: './user-outline.component.html',
  styleUrls: ['./user-outline.component.scss']
})
export class UserOutlineComponent implements OnInit {
  @Input() className: string = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
