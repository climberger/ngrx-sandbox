import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntitiesContainerComponent } from './my-entities-container.component';

describe('MyEntitiesContainerComponent', () => {
  let component: MyEntitiesContainerComponent;
  let fixture: ComponentFixture<MyEntitiesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEntitiesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEntitiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
