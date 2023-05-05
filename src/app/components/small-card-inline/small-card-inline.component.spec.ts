import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardInlineComponent } from './small-card-inline.component';

describe('SmallCardInlineComponent', () => {
  let component: SmallCardInlineComponent;
  let fixture: ComponentFixture<SmallCardInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
