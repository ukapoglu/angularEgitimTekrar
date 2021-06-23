import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaciListelemeComponent } from './kullaci-listeleme.component';

describe('KullaciListelemeComponent', () => {
  let component: KullaciListelemeComponent;
  let fixture: ComponentFixture<KullaciListelemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaciListelemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaciListelemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
