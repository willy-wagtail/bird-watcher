import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eye-outline',
  templateUrl: './eye-outline.component.html',
  styleUrls: ['./eye-outline.component.scss']
})
export class EyeOutlineComponent implements OnInit {
  @Input() className: string = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
