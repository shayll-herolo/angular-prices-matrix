import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-matric-cell',
  templateUrl: './matric-cell.component.html',
  styleUrls: ['./matric-cell.component.css'],
})
export class MatricCellComponent implements OnChanges {
  @Input() data = '';
  @Input() xIndex: number;
  @Input() yIndex: number;
  @Input() selectedCell: { xIndex: number; yIndex: number };
  @Output() selectCell = new EventEmitter<any>();

  isHead = false;

  constructor() {}

  ngOnChanges() {
    this.isHead = this.xIndex === 0 || this.yIndex === 0;
  }

  handleCellClick() {
    if (!this.data || this.isHead || this.data === 'empty') {
      return;
    }
    this.selectCell.emit({ xIndex: this.xIndex, yIndex: this.yIndex });
  }
}
