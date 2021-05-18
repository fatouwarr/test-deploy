import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAccompagnementComponent } from './type-accompagnement.component';

describe('TypeAccompagnementComponent', () => {
  let component: TypeAccompagnementComponent;
  let fixture: ComponentFixture<TypeAccompagnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAccompagnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAccompagnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
