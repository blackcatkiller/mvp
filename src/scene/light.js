class Light {
  constructor(){
    this.instances = {}

  }
  init(){
    this.instances.ambientLlight = new THREE.AmbientLight(0xffffff, 0.8)
    this.instances.shadowLight = new THREE.DirectionalLight( 0xffffff, 0.3)    
    this.instances.shadowLight.position.set(10, 30, 20)
    this.instances.shadowLight.castShadow = true;
    this.instances.shadowTarget = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1,0.1),
      new THREE.MeshBasicMaterial({color: 0x09F7F7})
    )

    this.instances.shadowLight.shadow.camera.near = 0.5
    this.instances.shadowTarget.visible = false    
    this.instances.shadowTarget.name = 'shadowTarget'
    this.instances.shadowLight.target = this.instances.shadowTarget

    this.instances.shadowLight.shadow.camera.near = 0.5
    this.instances.shadowLight.shadow.camera.far = 500
    this.instances.shadowLight.shadow.camera.left = -100
    this.instances.shadowLight.shadow.camera.right = 100
    this.instances.shadowLight.shadow.camera.top = 100
    this.instances.shadowLight.shadow.camera.bottom = -100

    this.instances.shadowLight.shadow.mapSize.width = 1024
    this.instances.shadowLight.shadow.mapSize.height = 1024


    
  }
}
export default new Light()