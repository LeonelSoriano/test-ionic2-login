import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { IonicModule, Platform, ViewController,NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, ViewControllerMock } from '../../../test-config/mocks-ionic';
import { LoginPage } from './login';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { LoginDao } from '../../api/dao/login-dao';


describe('Page1', function() {
  let de: DebugElement;
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage),
        HttpModule
      ],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: ViewController, useClass: ViewControllerMock},
        LoginDao
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

 it("test login", function() {
    comp.LoginDao.doLogin("miguel@tuten.cl", "1234");
     expect(localStorage.getItem("sessionTokenWeb")).not.toBe(null);
     expect(localStorage.getItem("sessionTokenWeb")).not.toBe(undefined);

     comp.LoginDao.doLogin("miguel@tuten.cl", "12345");
     expect(localStorage.getItem("sessionTokenWeb")).toBe(undefined || null);
  });
  
});