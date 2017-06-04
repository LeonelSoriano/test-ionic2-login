

export class EndPointConfig {
  private static _endPoint : string = "https://dev.tuten.cl/TutenREST/rest/";

  public static get USER_LOGIN():string {return EndPointConfig._endPoint + "user/";}

}
