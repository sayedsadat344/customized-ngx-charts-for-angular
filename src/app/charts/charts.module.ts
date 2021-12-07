import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { CountAreaComponent } from './components/count-area/count-area.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieAreaComponent } from './components/pie-area/pie-area.component';


@NgModule({
  declarations: [
    VerticalBarComponent,
    CountAreaComponent,
    PieAreaComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
    
  ],
  exports:[VerticalBarComponent,CountAreaComponent,PieAreaComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartsModule { }
