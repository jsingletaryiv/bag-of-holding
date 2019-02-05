import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  // Page Header
  pageTitle = 'Contact';
  pageSubTitle = 'Let me know what you think';

  // Section 1
  section1Title = 'Personal Information / Social Media Outlets';
  section1Text = '';
  missionTitle = 'Test Card:';
  missionText = '';

  constructor() { }

  ngOnInit() {
  }

}
