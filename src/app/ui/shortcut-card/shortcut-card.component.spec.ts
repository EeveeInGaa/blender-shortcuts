import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutCardComponent } from './shortcut-card.component';

describe('ShortcutCardComponent', () => {
  let component: ShortcutCardComponent;
  let fixture: ComponentFixture<ShortcutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortcutCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortcutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
