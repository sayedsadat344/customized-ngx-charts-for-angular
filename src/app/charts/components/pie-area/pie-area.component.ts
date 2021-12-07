import { Component, OnInit } from '@angular/core';
import { single } from 'src/app/data';

@Component({
  selector: 'app-pie-area',
  templateUrl: './pie-area.component.html',
  styleUrls: ['./pie-area.component.css']
})
export class PieAreaComponent implements OnInit {


  single: any[] | undefined;
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  ngOnInit(): void {
  }

}
