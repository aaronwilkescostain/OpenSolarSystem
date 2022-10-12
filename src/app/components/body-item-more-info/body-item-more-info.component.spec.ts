import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyItemMoreInfoComponent } from './body-item-more-info.component';

describe('BodyItemMoreInfoComponent', () => {
  let component: BodyItemMoreInfoComponent;
  let fixture: ComponentFixture<BodyItemMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyItemMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyItemMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
