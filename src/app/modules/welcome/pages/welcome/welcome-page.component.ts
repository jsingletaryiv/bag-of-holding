import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  // Page Header
  // pageTitle = 'Welcome';
  pageSubTitle = 'Application / UI/UX Developer';
  // pageSubTitle = 'Since MCMXCVIII';

  // Section 1
  section1Title = 'Forging Concepts into Creation //';
  section1Text = '';
  missionTitle = 'Mission Statement //';
  missionText = '';

  constructor() { }

  ngOnInit() { }

}
