import {s_frustumSize} from '../../confs/scene-conf'
 class Background{
  constructor(){
  }
  init(){
    const geometry = new THREE.PlaneGeometry(s_frustumSize*2, window.innerHeight/window.innerWidth*s_frustumSize*2)
    const material = new THREE.MeshBasicMaterial({
      color: 0xd7dbe6,
      opacity:1,
      transparent:true,
      side: THREE.DoubleSide
    })
    this.instance = new THREE.Mesh(geometry,material)
  }
}

export default new Background()