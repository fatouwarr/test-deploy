import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireDeleteComponent } from './partenaire-delete.component';

describe('PartenaireDeleteComponent', () => {
  let component: PartenaireDeleteComponent;
  let fixture: ComponentFixture<PartenaireDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenaireDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
