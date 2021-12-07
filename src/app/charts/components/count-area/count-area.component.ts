import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-count-area',
  templateUrl: './count-area.component.html',
  styleUrls: ['./count-area.component.css']
})
export class CountAreaComponent implements OnInit {
  
  // @Input() view: any[]|undefined;
  // @Input() colorScheme: any|undefined;
  // @Input() value: number|undefined;
  // previousValue: number = 70;
  // @Input() units:string | undefined;

  @Input() graph:any|undefined;



  onSelect(event: any) {
    console.log(event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
