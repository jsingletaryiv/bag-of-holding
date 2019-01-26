import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // TODO:: move redundant content into a `shared.utils` component
  myName = 'James Singletary IV';
  mySlogan = 'Forging Concepts into Creation //';
  myCopyright = 'Copyright 2018 - All Rights Reserved';

  constructor() { }

  ngOnInit() { }
    // Code...
}
