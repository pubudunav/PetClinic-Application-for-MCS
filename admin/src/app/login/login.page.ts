import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model';
import { LoginService } from './../services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
userName:string;
password:string;
user:User;
  constructor(private loginService:LoginService, private auths: AngularFireAuth,
    ) {
    
   }

  ngOnInit() {
  }
login(){}
register(){

this.user={
  $key:"",
  username:this.userName,
  password:this.password,
  usertype:"admin"
};
console.log(this.user);
this.loginService.createUser(this.user);

}

}
