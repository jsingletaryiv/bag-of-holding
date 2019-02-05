import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  // Page Header
  pageTitle = 'About';
  pageSubTitle = 'So you might be thinking...';

  // Section 1
  section1Title = 'Who is this guy!?';
  section1Text = '';
  missionTitle = 'Test Card:';
  missionText = '';

  constructor() { }

  ngOnInit() {
  }

}
