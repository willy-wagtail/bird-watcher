import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = false;
  showSidebar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.activatedRoute.firstChild) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data['showHeader'] !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data['showSidebar'] !== false;
      }
    });
  }
}
