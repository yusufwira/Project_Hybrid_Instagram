import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpostingComponent } from './detailposting.component';

describe('DetailpostingComponent', () => {
  let component: DetailpostingComponent;
  let fixture: ComponentFixture<DetailpostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
