import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myObject = {
    name: 'ahmed',
    age: 5,
  };

  //angular change detection only triggers when a new reference is assigned to an input property
// we need  a new reference so the change detection happens
  onClick() {
    this.myObject = { ...this.myObject, age: this.myObject.age + 5 };
  }
}
