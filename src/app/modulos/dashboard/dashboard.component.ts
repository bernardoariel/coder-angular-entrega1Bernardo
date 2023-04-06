import { ToolbarComponent } from './../../shared/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer;
  @ViewChild(ToolbarComponent, { static: false }) toolbar!: ToolbarComponent
  iconoGirado: boolean = false;
  showFiller = false;

  cerrarMenu() {
    this.drawer.close();
    this.toolbar.toggleIcono();
  }

}
