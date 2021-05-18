import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireUpdateComponent } from './partenaire-update.component';

describe('PartenaireUpdateComponent', () => {
  let component: PartenaireUpdateComponent;
  let fixture: ComponentFixture<PartenaireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenaireUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
