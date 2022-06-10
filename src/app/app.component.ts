import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAppHeader = false;
  showAppSidebar = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.activatedRoute.firstChild) {
        this.showAppHeader = this.activatedRoute.firstChild.snapshot.data['showAppHeader'] !== false;
        this.showAppSidebar = this.activatedRoute.firstChild.snapshot.data['showAppSidebar'] !== false;
      }
    });
  }
}
