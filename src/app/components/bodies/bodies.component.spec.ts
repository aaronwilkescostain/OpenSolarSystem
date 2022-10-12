import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodiesComponent } from './bodies.component';

describe('BodiesComponent', () => {
  let component: BodiesComponent;
  let fixture: ComponentFixture<BodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
