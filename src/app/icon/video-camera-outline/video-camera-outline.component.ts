import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-camera-outline',
  templateUrl: './video-camera-outline.component.html',
  styleUrls: ['./video-camera-outline.component.scss']
})
export class VideoCameraOutlineComponent implements OnInit {

  @Input() className: string = 'h-6 w-6';

  constructor() { }

  ngOnInit(): void {
  }

}
