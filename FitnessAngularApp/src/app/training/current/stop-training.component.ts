import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: `app-stop-training`,
  template: `
    <h1 mat-dialog-title>TEST</h1>
    <mat-dialog-content>
      <p>
        You've finished {{ data.progress }}%
      </p>
    </mat-dialog-content>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </div>
              `
})
export class StopTrainingComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
