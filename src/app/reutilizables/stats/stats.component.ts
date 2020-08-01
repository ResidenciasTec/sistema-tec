import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  
  text: String;
  
  constructor() { 
    this.text = "calendario >"
  }

  ngOnInit(): void {
  }

}
 