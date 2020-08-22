import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.scss']
})
export class ExamViewComponent implements OnInit {
  imglogo:string="assets/img/logo.jpeg";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  solve(){
    this.route.navigate(['./examDashboard'])
  }
}
