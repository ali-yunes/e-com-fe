import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<{message:string}> {
    return this.http.post<{message:string}>(`${this.apiUrl}/login`, { username, password }, {withCredentials: true});
  }
}
