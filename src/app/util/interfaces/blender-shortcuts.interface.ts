import { BlenderArea } from '../enums/blender-area.enum';

export interface BlenderShortcuts {
  area: BlenderArea[];
  title?: string; //optional title to find faster
  shortcut: string[];
  description: string[]; //array in case its more than one
  information?: string[]; //optional hints; array in case its more than one
  tags?: string[]; //tags to find faster
}
