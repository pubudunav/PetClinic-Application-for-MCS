import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeterinarianPage } from './veterinarian.page';

describe('VeterinarianPage', () => {
  let component: VeterinarianPage;
  let fixture: ComponentFixture<VeterinarianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinarianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeterinarianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
