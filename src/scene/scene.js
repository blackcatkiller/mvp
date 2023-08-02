import {camera} from './index'
import light from './light'
import background from '../objects/background'
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
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap

    this.addCamera()
    this.addBackground()

    this.addHelper()
    this.addLight()
   
  }

  addBackground(){
    this.background = background
    this.background.init()
    this.background.instance.position.z = -84
    this.camera.instance.add(this.background.instance)

  }

  addCamera(){
    this.camera = camera
    this.camera.init()
    this.instance.add(this.camera.instance)
  }

  addHelper(){
    this.axesHelper = new THREE.AxesHelper(100)
    this.instance.add(this.axesHelper)
    this.cameraHelper = new THREE.CameraHelper( this.camera.instance );
    // this.instance.add( this.cameraHelper )
  }
  addLight(){
    this.light = light
    this.light.init()
    
    for(let LightType in this.light.instances){
      if(this.light.instances.hasOwnProperty(LightType)==true){
        this.instance.add(this.light.instances[LightType])
      }
    }
  }
  render(){
    

    this.renderer.render(this.instance, this.camera.instance)
    // console.log(canvas)

  }
}

export default new Scene()