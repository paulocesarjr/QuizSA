import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPerguntasComponent } from './cadastro-perguntas.component';

describe('CadastroPerguntasComponent', () => {
  let component: CadastroPerguntasComponent;
  let fixture: ComponentFixture<CadastroPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPerguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
