import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TagComponent, SeparatorComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
