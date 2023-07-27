import { b_height,b_width } from "../../confs/block-conf";
export default class BaseBlock{
  constructor(type){
    this.type = type //cuboid|cylinder
    this.height = b_height;
    this.width = b_width;
    
  }
}