import {scene} from '../scene/index'
import Cuboid from '../block/cuboid'
import Cylinder from '../block/cylinder'
import ground from '../objects/ground'
import bottle from '../objects/bottle'
export default class GamePage{
  constructor(callbacks){
    this.callbacks = callbacks
  }
  init(){
    this.scene = scene
    this.scene.init();
    this.addInitBlock()
    this.addBottle()
    this.addGround();

    this.render()
  }
  render(){
    this.scene.render()
    if(this.bottle){
      this.bottle.update()
    }
    requestAnimationFrame(this.render.bind(this))
  }

  addInitBlock(){
    const cuboidBlock = new Cuboid(-15, 0, 0)
    const cylinderBlock = new Cylinder(23,0,0)
    this.scene.instance.add(cuboidBlock.instance);
    this.scene.instance.add(cylinderBlock.instance);
  }
  addGround(){
    this.ground = ground
    ground.init()
    this.scene.instance.add(this.ground.instance)

  }
  addBottle(){
    this.bottle = bottle;
    bottle.init()
    this.scene.instance.add(this.bottle.obj)
    this.bottle.showup()

  }
  
}