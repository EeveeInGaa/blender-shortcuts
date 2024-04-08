import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: string = '';
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchTerm);
  }
}
