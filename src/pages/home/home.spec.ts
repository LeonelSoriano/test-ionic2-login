import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { IonicModule, Platform, ViewController,NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock, ViewControllerMock } from '../../../test-config/mocks-ionic';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { LoginDao } from '../../api/dao/login-dao';
import { HomePage } from './home';


describe('Page1', function() {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
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
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

 it("test login", function() {
    comp.onLogout();
    
    expect(localStorage.getItem("sessionTokenWeb")).toBe(undefined);
    expect(localStorage.length).toBe(0);

  });
  
});