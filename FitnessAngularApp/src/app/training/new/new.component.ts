import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  type: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  selectedValue: string;

  workouts: Food[] = [
    { value: '0', type: 'Upper Body' },
    { value: '1', type: 'Lower Body' },
    { value: '2', type: 'Full body' },
    { value: '3', type: 'ABS' },
    { value: '4', type: 'Cardio' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
