import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardBlockComponent } from './small-card-block.component';

describe('SmallCardBlockComponent', () => {
  let component: SmallCardBlockComponent;
  let fixture: ComponentFixture<SmallCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
