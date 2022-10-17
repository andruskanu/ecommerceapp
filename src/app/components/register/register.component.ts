import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/model/user-entity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  
  constructor(private router: Router, private userService:UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
      //"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}"
    })
  }

  public onRegister(): void {
      this.userService.registerUser(this.registerForm.value).subscribe({
        next: (response: UserEntity) => {
          this.router.navigate(['/login']);
          // if succesfull do something
        },
        error: (errorResponse: HttpErrorResponse) => {
          alert(errorResponse.message)
        }
      })

  }



}
