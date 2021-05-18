import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationSocioEconomiqueComponent } from './situation-socio-economique.component';

describe('SituationSocioEconomiqueComponent', () => {
  let component: SituationSocioEconomiqueComponent;
  let fixture: ComponentFixture<SituationSocioEconomiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationSocioEconomiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationSocioEconomiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
