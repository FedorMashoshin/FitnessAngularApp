import { Component } from "@angular/core";

@Component({
  selector: `app-stop-training`,
  template: `
    <h1 mat-dialog-title>TEST</h1>
    <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">No</button>
    <button mat-button [mat-dialog-close]="false">Yes</button>
</div>
              `
})
export class StopTrainingComponent {}
