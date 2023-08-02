import {initPosition,headRadius} from '../../confs/bottle-conf'
import{b_height} from '../../confs/block-conf'
import {customAnimation} from '../../libs/animation'
class Bottle{
  constructor(){

  }
  init (){
    const {x,y,z} = initPosition
    this.obj = new THREE.Object3D()
    this.obj.name = 'bottle'
    this.obj.position.set(x,30,z)

    this.loader = new THREE.TextureLoader()
    const specularTexture = this.loader.load('/game/res/images/head.png')
    const specularMaterial = new THREE.MeshBasicMaterial({
      map:specularTexture
    })

    const bottomTexture = this.loader.load('/game/res/images/bottom.png')
    const bottomMaterial = new THREE.MeshBasicMaterial({
      map:bottomTexture
    })

    const middleTexture = this.loader.load('/game/res/images/middle.png')
    const middleMaterial = new THREE.MeshBasicMaterial({
      map:middleTexture
    })


    this.bottle = new THREE.Object3D()
    this.bottle.position.set(0, 2.2, 0)

    this.head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRadius),
      bottomMaterial
    )
    this.head.castShadow = true
    this.head.position.set(0, 3.57143*headRadius, 0)

    let topGeometry = new THREE.SphereGeometry(headRadius/1.4, 20,20)
    topGeometry.scale(1,0.54, 1)
    this.top = new THREE.Mesh(
      topGeometry,
      specularMaterial
    )
    this.top.castShadow = true
    this.top.position.set(0,1.8143*headRadius, 0)

    this.middle = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headRadius/1.4,
        headRadius/1.4*0.88,
        headRadius*1.2,
        40
      ),
      middleMaterial
    )
    this.middle.castShadow = true
    this.middle.position.set(0,1.3857*headRadius,0)

    this.bottom = new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.62857 * headRadius,
         0.907143*headRadius,
         1.91423*headRadius,
         40
      ),
      bottomMaterial 
    )
    this.bottom.castShadow = true

    
    this.body = new THREE.Object3D()
    this.body.add(this.bottom)
    this.body.add(this.middle)
    this.body.add(this.top)

    
    this.bottle.add(this.head)
    this.bottle.add(this.body)
    this.obj.add(this.bottle)

  }

  update() {
    this.head.rotation.y += 0.06
  }
  showup() {
    const {x,y,z} = initPosition
    customAnimation.to(0.5,this.obj.position,{
        x:x,
        y:y+b_height/2,
        z
      },'Linear')
  }

}

export default new Bottle()