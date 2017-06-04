import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';

import { LoginDao } from '../../api/dao/login-dao';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginDao]
})
export class LoginPage {

myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    private _loginDao : LoginDao
  ) {

    if(localStorage.getItem("sessionTokenWeb") !== null &&
      localStorage.getItem("sessionTokenWeb") !== undefined ){
      this.navCtrl.setRoot(HomePage); 
    }

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required]],
    });
  }

  /**
   * metodo encargado de llamar a la peticion de logeo y pasarle
   * la informacion nesecaria desde la vista
   */
  saveData(): void{
    this._loginDao.doLogin(this.myForm.value.email, 
      this.myForm.value.password);
  }

  
  public get LoginDao() : LoginDao {
    return this._loginDao;
  }
  


}
