import { MatDrawer } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  showFiller = false;
}
