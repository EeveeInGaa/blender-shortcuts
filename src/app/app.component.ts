import { Component } from '@angular/core';
import { ShortcutsService } from './util/services/shortcuts.service';
import { BlenderShortcuts } from './util/interfaces/blender-shortcuts.interface';
import { SearchComponent } from './ui/search/search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagComponent } from './ui/tag/tag.component';
import { CardComponent } from './ui/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent,
    TagComponent,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generalShortcuts: BlenderShortcuts[] = [];
  editModeShortcuts: BlenderShortcuts[] = [];
  constructor(private readonly shortcutsService: ShortcutsService) {
    this.generalShortcuts = this.shortcutsService.getGeneralShortcuts();
    this.editModeShortcuts = this.shortcutsService.getEditModeShortcuts();
  }
}
