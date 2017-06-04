import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginDto } from '../../api/dto/login-dto';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _logigDto : LoginDto;

  constructor(private navCtrl: NavController) {
    this._logigDto = new LoginDto();
  }

  //event
  /**
   * evento encargado de limpiar el local storage y hacer redirec a la
   * pagina de login ->(logout)
   */
  public onLogout(): void{
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  //getter setter
  public get loginDto() : LoginDto {
    return this._logigDto;
  }
  


}
