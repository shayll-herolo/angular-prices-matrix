import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data = [
    ['', '1/4', '2/4', '3/4', '4/4', '5/4', '6/4', '7/4'],
    ['1/5', '', '125$', 'empty', '125$', '125$', '125$', '130$'],
    ['2/5', '125$', 'empty', 'empty', 'empty', 'empty', '125$', '130$'],
    ['3/5', 'empty', 'empty', '125$', 'empty', '125$', 'empty', 'empty'],
    ['4/5', '125$', 'empty', 'empty', 'empty', '125$', '125$', '130$'],
    ['5/5', '125$', 'empty', 'empty', 'empty', '125$', 'empty', 'empty'],
    ['6/5', 'empty', '125$', 'empty', 'empty', 'empty', '125$', '130$'],
    ['7/5', 'empty', '125$', 'empty', '125$', '125$', '125$', 'empty'],
  ];
  selectedCell: {xIndex: number, yIndex:number};

  handleSelectCell(event) {
    console.log(event, this.data[event.yIndex][event.xIndex]);
    this.selectedCell = event;
  }
}
