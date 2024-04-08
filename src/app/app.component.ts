import { Component } from '@angular/core';
import { ShortcutsService } from './util/services/shortcuts.service';
import { BlenderShortcuts } from './util/interfaces/blender-shortcuts.interface';
import { SearchComponent } from './ui/search/search.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagComponent } from './ui/tag/tag.component';
import { CardComponent } from './ui/card/card.component';
import { ShortcutCardComponent } from './ui/shortcut-card/shortcut-card.component';
import { SeparatorComponent } from './ui/separator/separator.component';
import { HeadingComponent } from './ui/heading/heading.component';
import { LogoComponent } from './ui/logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchComponent,
    TagComponent,
    CardComponent,
    ShortcutCardComponent,
    SeparatorComponent,
    HeadingComponent,
    LogoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generalShortcuts: BlenderShortcuts[] = [];
  editModeShortcuts: BlenderShortcuts[] = [];
  mergedItems: BlenderShortcuts[] = [];

  filteredItems: BlenderShortcuts[] = [];

  searchTerm = '';
  isSearchEmpty = true;
  constructor(private readonly shortcutsService: ShortcutsService) {
    this.generalShortcuts = this.shortcutsService.getGeneralShortcuts();
    this.editModeShortcuts = this.shortcutsService.getEditModeShortcuts();

    this.mergedItems = [...this.generalShortcuts, ...this.editModeShortcuts];
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;

    if (!this.searchTerm) {
      this.isSearchEmpty = true;
      return;
    }

    this.isSearchEmpty = false;
    this.filteredItems = this.mergedItems.filter(item => {
      return (
        item.title!.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.shortcut!.some(desc =>
          desc.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) ||
        item.description.some(desc =>
          desc.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) ||
        item.information!.some(desc =>
          desc.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) ||
        item.tags!.some(desc =>
          desc.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    });
  }
}
