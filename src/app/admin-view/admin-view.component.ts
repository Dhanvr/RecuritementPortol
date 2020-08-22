import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  imglogo:string="assets/img/logo.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
