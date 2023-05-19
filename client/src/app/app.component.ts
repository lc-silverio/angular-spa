import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  cardSize: string = "";
  structure: string = "";
  layout: string = "";
  connection: string = "";
  clicked: boolean | undefined;

  ngOnInit() {
  }

  click() {
    this.clicked = true;
  }
}

