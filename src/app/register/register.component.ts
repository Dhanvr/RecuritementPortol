import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  imglogo:string="assets/img/logo.jpeg";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  register(){
    this.route.navigate(['']);
  }

}
