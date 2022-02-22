import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpasoComponent } from './elpaso.component';

describe('ElpasoComponent', () => {
  let component: ElpasoComponent;
  let fixture: ComponentFixture<ElpasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElpasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElpasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
