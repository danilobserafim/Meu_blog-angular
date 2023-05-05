import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardInlineComponent } from './group-card-inline.component';

describe('GroupCardInlineComponent', () => {
  let component: GroupCardInlineComponent;
  let fixture: ComponentFixture<GroupCardInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCardInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
