import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGameComponent } from './fighting-game.component';

describe('FightingGameComponent', () => {
  let component: FightingGameComponent;
  let fixture: ComponentFixture<FightingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
