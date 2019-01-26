import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox-page.component.html',
  styleUrls: ['./sandbox-page.component.scss']
})
export class SandboxPageComponent implements OnInit {

  // Page Header
  pageTitle = 'Sandbox';
  pageSubTitle = 'Case Studies & Code Samples';

  // Section 1
  section1Title = 'New project - New Requirements ';
  section1Text = '';
  missionTitle = 'Test Card:';
  missionText = '';

  constructor() { }

  ngOnInit() {
  }

}
