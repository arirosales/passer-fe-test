import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationTableComponent } from './ocupation-table.component';

describe('OcupationTableComponent', () => {
  let component: OcupationTableComponent;
  let fixture: ComponentFixture<OcupationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcupationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcupationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
