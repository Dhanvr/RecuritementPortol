import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imglogo:string="assets/img/logo.jpeg";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 clickme(){
        this.route.navigate(['./login']);
    
 }
 admin(){
  this.route.navigate(['./admin']);
 }
 toRegister(){
   this.route.navigate(['./register']);
 }




 
}
