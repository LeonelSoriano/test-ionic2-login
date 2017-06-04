import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { EndPointConfig } from '../../config/endpoint-config';
import { GeneralConfig } from '../../config/general-config';
import {  LoadingController, ToastController, NavController} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class LoginDao {
  
  private _header: Headers;
  private _loaderUnauthorized : any;

  constructor(private _http: Http, private loadingCtrl:LoadingController,
    private toastCtrl: ToastController, private navCtrl: NavController){

      this._loaderUnauthorized = this.loadingCtrl.create({
        content: "Logeando..."
      });
  }

/**
 * Metodo encargado de realizar la peticion de logeo a la api backend
 * @param email correo de usuario 
 * @param password contraseña de usuario
 */
  public doLogin(email : string, password : string) : void {
    localStorage.clear();
    
    let self : LoginDao = this;
      
    this._loaderUnauthorized.present();

    this._cleanHader();
    let options = new RequestOptions({headers : this._header });
    this._header.append('Password', password);

    this._http.put(EndPointConfig.USER_LOGIN + email, null,  options)
      .subscribe(
        data =>console.log(self._loginRedirec(data.json())),
        err => self._showToasUnauthorized()
      );
  }

/**
 * reinicia los header cada vez que se realiza la peticion de logeo
 * esto es para ingresar los Passwrod dinamicos en el mismo
 */
  private _cleanHader(): void{
      this._header = new Headers();
      this._header.append('Content-Type', 'application/json');
      this._header.append('Accept', 'application/json');
      this._header.append('App', GeneralConfig.APP_TYPE);  
  }

  /**
   * metodo encagado de mostrar un toas cuando la peticion falla
   * por casos explicativos el toma todas las peticiones fuera de 200
   * como un caso errado de logeo
   */
  private _showToasUnauthorized(): void {

    this._loaderUnauthorized.dismiss();

    let toast = this.toastCtrl.create({
      message: 'Credenciales erradas',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  /**
   * metodo encargado de settear el localStorage y hacer el redirec a
   * home
   * @param jsonResponse json enviando desde el backend
   */
  private _loginRedirec(jsonResponse : any): void {
    this._loaderUnauthorized.dismiss();
    localStorage.setItem('firstName', jsonResponse.firstName);
    console.log(jsonResponse.firstName);
    localStorage.setItem('lastName', jsonResponse.lastName);
    localStorage.setItem('sessionTokenWeb', jsonResponse.sessionTokenWeb);
    localStorage.setItem('phoneNumber',jsonResponse.phoneNumber);
    localStorage.setItem('email',jsonResponse.email);
    this.navCtrl.setRoot(HomePage);        
  }

  //getter setter
  get header():Headers {
        return this._header;
  }

}
