import { NgModule, Component } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RegisterComponent } from './register/register.component';
import { ExamViewComponent } from './exam-view/exam-view.component';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminViewComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'registrationi', component: HomeComponent},
  {path: 'examPage', component:ExamViewComponent },
  {path: 'examDashboard', component: ExamDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
