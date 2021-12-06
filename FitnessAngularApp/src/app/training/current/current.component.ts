import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  progress: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.progress = this.progress + 5;
    }, 1000)
  }

}
