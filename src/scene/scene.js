import {camera} from './index'

class Scene{
  constructor(){
    this.instance = null
  }
  init(){
    this.instance = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas:canvas,
      antilias:true, //抗锯齿
      preserveDrawingBuffer: true
    })
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera = camera

    this.camera.init()
    console.log(this.camera)
    this.axesHelper = new THREE.AxesHelper(100)

    this.instance.add(this.axesHelper)
    
  }

  render(){
    
    this.renderer.render(this.instance, this.camera.instance)
    // console.log(canvas)

  }
}

export default new Scene()