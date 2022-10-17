import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  credentials = { email: '', password: '' };
  error = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.app.authenticate(this.credentials, () => {
      
      this.router.navigateByUrl('/home');
    });
    return false;
  }

  

}


