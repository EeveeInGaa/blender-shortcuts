import { BlenderArea } from '../enums/blender-area.enum';

export interface BlenderShortcuts {
  area: BlenderArea[];
  //title to find faster
  title: string;
  //array to add plus in between
  shortcut: string[];
  //array in case it's more than one
  description: string[];
  //optional hints; array in case it's more than one
  information?: string[];
  //tags to find topic faster
  tags: string[];
}
