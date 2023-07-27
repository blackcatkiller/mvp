import {s_frustumSize} from '../../confs/scene-conf'
class Camera{
  constructor(){
    this.instance = null
  }
  init(){
    const aspect = window.innerHeight/window.innerWidth

    this.instance = new THREE.OrthographicCamera(-s_frustumSize,s_frustumSize,s_frustumSize*aspect,-s_frustumSize*aspect,-100,85)
    this.instance.position.set(-10,10, 10)
    this.target = new THREE.Vector3(0,0,0)
    // console.log(this.instance)
    this.instance.lookAt(this.target)
  }
}

export default new Camera()