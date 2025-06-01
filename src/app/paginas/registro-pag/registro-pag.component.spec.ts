import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPagComponent } from './registro-pag.component';

describe('RegistroPagComponent', () => {
  let component: RegistroPagComponent;
  let fixture: ComponentFixture<RegistroPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
