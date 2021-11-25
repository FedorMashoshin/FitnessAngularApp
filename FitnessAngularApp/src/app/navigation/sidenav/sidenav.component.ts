import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/global';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  links: any = GlobalConstants.links;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.closeSidenav.emit();
  }
}
