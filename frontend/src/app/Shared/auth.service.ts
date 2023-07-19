import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  //Login Methods
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
      // localStorage.getItem('token','true');
      this.router.navigate(['/dashboard']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  };

  //Registration Methods
  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( () => {
      alert("Registration SuccessFul!")
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  };

  //SignOut Methods
  logout(){
    this.fireAuth.signOut().then( () => {
      // localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  };
}
