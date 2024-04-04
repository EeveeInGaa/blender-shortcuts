import { Component, Input } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';
import { TagComponent } from '../tag/tag.component';
import { CardComponent } from '../card/card.component';
import { BlenderShortcuts } from '../../util/interfaces/blender-shortcuts.interface';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-shortcut-card',
  standalone: true,
  imports: [
    SeparatorComponent,
    TagComponent,
    CardComponent,
    NgForOf,
    NgIf,
    NgClass,
  ],
  templateUrl: './shortcut-card.component.html',
  styleUrl: './shortcut-card.component.css',
})
export class ShortcutCardComponent {
  @Input() data!: BlenderShortcuts;
}
