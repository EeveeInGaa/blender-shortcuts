import { Injectable } from '@angular/core';
import { BlenderShortcuts } from '../interfaces/blender-shortcuts.interface';
import {
  editModeShortcuts,
  generalShortcuts,
} from '../../../assets/shortcuts.const';

@Injectable({
  providedIn: 'root',
})
export class ShortcutsService {
  getEditModeShortcuts(): BlenderShortcuts[] {
    return editModeShortcuts;
  }

  getGeneralShortcuts(): BlenderShortcuts[] {
    return generalShortcuts;
  }
}
