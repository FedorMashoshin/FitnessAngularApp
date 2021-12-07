import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  progress: number = 0;
  timer: number;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) clearInterval(this.timer);
    }, 1000)
  }

  stopWorkout(): void {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent);
  }

}
