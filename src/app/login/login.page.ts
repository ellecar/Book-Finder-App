import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(public toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }
  signIn(){
    if (this.username == 'admin' && this.password == '123'){
      this.router.navigate(['/list']);
      this.sucess();
      this.clear();
    }
    else if(this.username == 'user' && this.password == '123'){
      this.router.navigate(['/home']);
      this.sucess();
      this.clear();
    }
    else
    {
    this.router.navigate(['/login']);
    this.clear();
    this.blank();
    }
  }

  signUp(){
    this.router.navigate(['/signup']);
  }
  
  show() {
    this.toastCtrl.create({
      header: 'Failed!',
      message: 'Wrong username or password please try again',
      position: 'top',
      duration: 2500,
      animated: true,
      color: 'danger',
      buttons: [{
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            // console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  sucess() {
    this.toastCtrl.create({
      header: 'Success!',
      message: 'Login Successfully',
      position: 'top',
      duration: 2500,
      animated: true,
      color: 'success',
      buttons: [{
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            // console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }
  blank() {
    this.toastCtrl.create({
      header: 'Failed!',
      message: 'Wrong Username and Password',
      position: 'top',
      duration: 2500,
      animated: true,
      color: 'danger',
      buttons: [{
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            // console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  clear(){
    this.username = '';
    this.password = '';
  }
}
