import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementContainerComponent } from './content-management-container.component';

describe('ContentManagementContainerComponent', () => {
  let component: ContentManagementContainerComponent;
  let fixture: ComponentFixture<ContentManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
