import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ComponentsModule { }
