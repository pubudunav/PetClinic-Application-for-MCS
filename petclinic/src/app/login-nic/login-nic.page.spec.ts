import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginNicPage } from './login-nic.page';

describe('LoginNicPage', () => {
  let component: LoginNicPage;
  let fixture: ComponentFixture<LoginNicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginNicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
