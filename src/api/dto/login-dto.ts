/**
 * clase que mapea la informacion de usuario guardado en el 
 * local storage
 */
export class LoginDto {

    private _firstName : string;
    private _lastName : string;
    private _sessionTokenWeb: string;
    private _phoneNumber: string; 
    private _email : string;

    constructor(){
        this._firstName = localStorage.getItem('firstName');
        this._lastName = localStorage.getItem('lastName');
        this._sessionTokenWeb = localStorage.getItem('sessionTokenWeb');
        this._phoneNumber = localStorage.getItem('phoneNumber');
        this._email = localStorage.getItem('email');
    }

    //getter setter
    public get firstName() : string {
        return this._firstName;
    }

    public get lastName() : string {
        return this._lastName;
    }

    public get sessionTokenWeb() : string {
        return this._sessionTokenWeb;
    }
    
    public get phoneNumber() : string {
        return this._phoneNumber;
    }
    
    public get email() : string {
        return this._email
    }

}
