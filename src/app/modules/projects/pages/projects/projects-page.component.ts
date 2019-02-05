import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  // Page Header
  pageTitle = 'Projects';
  pageSubTitle = 'Showcase from Past to Present';

  // Section 1
  section1Title = 'From Concept to Creation:';
  section1Text = '';
  missionTitle = 'Test Card:';
  missionText = '';

  constructor() { }

  ngOnInit() {
  }

}
