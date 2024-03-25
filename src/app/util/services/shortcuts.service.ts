import { Injectable } from '@angular/core';
import { BlenderShortcuts } from '../interfaces/blender-shortcuts.interface';
import { shortcuts } from '../../../assets/shortcuts.const';

@Injectable({
  providedIn: 'root',
})
export class ShortcutsService {
  getShortcuts(): BlenderShortcuts[] {
    return shortcuts;
  }
}
