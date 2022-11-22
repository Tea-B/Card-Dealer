import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newClass: string = "";
  index: number = 0;
  order: number = 0;
  toggle: boolean = false;
  newClasses: string[] = [];

  classes = [
    { name: 'Tortuga', number: 4,},
    { name: 'Conejo', number: 1 },
  ];

  addClass (newClass: string) {
    if (newClass === "") {
      return;
    } else {
      let eNames = [];

      for (let i = 0; i < this.classes.length; i++) {
        let element = this.classes[i];
        let eName = element.name;
        eNames.push(eName);
      }

      if (eNames.includes(newClass)) {
        return;
      } else {
        this.classes.push({name: newClass, number: 1})
      }
    }
  }

  sum (index: number) {
    this.classes[index].number++
  }

  sumO () {
    if (this.order >= this.newClasses.length - 1) {
      return;
    } else {
      this.order++
    }
  }

  sub (index: number) {
    if (this.classes[index].number >= 0) {
      return;
    } else {
      this.classes[index].number--
    }
  }

  delete (index: number) {
    if (this.classes.length <= 1) {
      return;
    } else {
      this.classes.splice(index, 1);
    }
  }

  mix () {
    for (let i = 0; i < this.classes.length; i++) {
      let element = this.classes[i];
      let eName = element.name;
      let eNumber = element.number;

      for (let j = 0; j < eNumber; j++) {
        this.newClasses.push(eName);
      }
    }

    this.newClasses = [...this.newClasses.sort(function () { return Math.random() - 0.5; })]
    this.toggle = true;
  }
}
