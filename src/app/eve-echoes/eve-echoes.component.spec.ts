import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveEchoesComponent } from './eve-echoes.component';

describe('EveEchoesComponent', () => {
  let component: EveEchoesComponent;
  let fixture: ComponentFixture<EveEchoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveEchoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveEchoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
