import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-outline',
  templateUrl: './home-outline.component.html',
  styleUrls: ['./home-outline.component.scss']
})
export class HomeOutlineComponent implements OnInit {
  
  @Input() className: string = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
