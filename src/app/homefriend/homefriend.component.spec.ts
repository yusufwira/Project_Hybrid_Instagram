import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefriendComponent } from './homefriend.component';

describe('HomefriendComponent', () => {
  let component: HomefriendComponent;
  let fixture: ComponentFixture<HomefriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomefriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
