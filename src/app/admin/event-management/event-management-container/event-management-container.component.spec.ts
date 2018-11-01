import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementContainerComponent } from './event-management-container.component';

describe('EventManagementContainerComponent', () => {
  let component: EventManagementContainerComponent;
  let fixture: ComponentFixture<EventManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
