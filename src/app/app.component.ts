import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public graphObject: { view: number[]; colorScheme: { domain: string[]; }; value: number; previousValue:number; units: string; } | undefined;
  barObject: {
    data:{ name: string; value: number; }[];
    view: number[];
    // options
    showXAxis: boolean; showYAxis: boolean; gradient: boolean; showLegend: boolean; showXAxisLabel: boolean; xAxisLabel: string; showYAxisLabel: boolean; yAxisLabel: string; colorScheme: { domain: string[]; };
  } | undefined;
  data: { name: string; value: number; }[];
  

  constructor(){
    this.data = [ {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }];
    this.counterGrapghObject();
    this.barGraphObject();
  }
  barGraphObject() {
    this.barObject = {
      "data": this.data,
      "view": [500, 400],
      // options
      "showXAxis" : true,
      "showYAxis" : true,
      "gradient" : false,
      "showLegend" :true,
      "showXAxisLabel" : true,
      "xAxisLabel" :'Country',
      "showYAxisLabel" : true,
      "yAxisLabel" :'Population',
    
      "colorScheme" : {
        "domain": ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
      },
    };
   

  }
  counterGrapghObject() {
    this.graphObject = {
      "view":[500, 380],
      "colorScheme" : {
        "domain": ['#55A454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
      },
      "value": 70,
      "previousValue":40,
      "units":'Faults'
    };
  }

}


