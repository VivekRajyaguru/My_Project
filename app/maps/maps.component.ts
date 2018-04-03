import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    lat = 23.033863;
    lng = 72.585022;
  constructor() { }

  ngOnInit() {
  }

}
