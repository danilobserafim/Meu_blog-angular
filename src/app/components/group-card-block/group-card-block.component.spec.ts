import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardBlockComponent } from './group-card-block.component';

describe('GroupCardBlockComponent', () => {
  let component: GroupCardBlockComponent;
  let fixture: ComponentFixture<GroupCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
