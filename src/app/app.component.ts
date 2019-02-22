import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  myName = 'James Singletary IV';
  myLocation = 'Tampa, Florida';

  constructor() { }

  ngOnDestroy() { }

}
