import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAngularHelperComponent } from './mat-angular-helper.component';

describe('MatAngularHelperComponent', () => {
  let component: MatAngularHelperComponent;
  let fixture: ComponentFixture<MatAngularHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAngularHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAngularHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
