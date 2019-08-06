import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEntityMapperComponent } from './ngx-entity-mapper.component';

describe('NgxEntityMapperComponent', () => {
  let component: NgxEntityMapperComponent;
  let fixture: ComponentFixture<NgxEntityMapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEntityMapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEntityMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
