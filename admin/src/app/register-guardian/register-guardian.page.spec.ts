import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterGuardianPage } from './register-guardian.page';

describe('RegisterGuardianPage', () => {
  let component: RegisterGuardianPage;
  let fixture: ComponentFixture<RegisterGuardianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGuardianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterGuardianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
