import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-dashboard',
  templateUrl: './exam-dashboard.component.html',
  styleUrls: ['./exam-dashboard.component.scss']
})
export class ExamDashboardComponent implements OnInit {
  imglogo:string="assets/img/logo.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
