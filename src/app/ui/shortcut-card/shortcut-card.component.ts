import { Component } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';
import { TagComponent } from '../tag/tag.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-shortcut-card',
  standalone: true,
  imports: [SeparatorComponent, TagComponent, CardComponent],
  templateUrl: './shortcut-card.component.html',
  styleUrl: './shortcut-card.component.css',
})
export class ShortcutCardComponent {}
