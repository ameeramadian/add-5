import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() personObject: { name: string; age: number } = { name: '', age: 0 };

  personName: string = '';
  personAge: number = 0;

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log('simpleChange: ', simpleChange)
    if (simpleChange['personObject'].currentValue) {
      this.personName = simpleChange['personObject'].currentValue.name;
      this.personAge = simpleChange['personObject'].currentValue.age;

    }
  }
}
