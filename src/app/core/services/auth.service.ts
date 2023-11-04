import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authApi: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone,
              private route: ActivatedRoute,
              private afs: AngularFirestore) { }

  public oAuthLogin(email: string, password: string) {
    return this.authApi.signInWithEmailAndPassword(email, password)
      .then(async () => {
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }
}
