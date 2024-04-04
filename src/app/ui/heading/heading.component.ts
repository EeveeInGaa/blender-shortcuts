import { Component } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [SeparatorComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css',
})
export class HeadingComponent {}
