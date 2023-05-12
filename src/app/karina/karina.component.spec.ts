import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarinaComponent } from './karina.component';

describe('KarinaComponent', () => {
  let component: KarinaComponent;
  let fixture: ComponentFixture<KarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
