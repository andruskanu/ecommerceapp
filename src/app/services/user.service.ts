import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from '../model/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerURL = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }


  public registerUser(user: UserEntity): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${this.apiServerURL}/users`, user);
  }
  
}
