import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerShellComponent } from './consumer-shell.component';

describe('ConsumerShellComponent', () => {
  let component: ConsumerShellComponent;
  let fixture: ComponentFixture<ConsumerShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
