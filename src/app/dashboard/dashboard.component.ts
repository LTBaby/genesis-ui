import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public router: Router, private route: ActivatedRoute) {}
  ngOnInit(){
    let currentRoute = this.route.root;
    console.log(this.router.url)

  }
}
