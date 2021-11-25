import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = GlobalConstants.links;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

}
