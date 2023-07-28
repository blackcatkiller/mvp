class Light {
  constructor(){
    this.instances = {}

  }
  init(){
    this.instances.ambientLlight = new THREE.AmbientLight(0xffffff, 0.8)
    this.instances.shadowLight = new THREE.DirectionalLight( 0xffffff, 0.3 )    
    this.instances.shadowLight.position.set(10, 30, 20)
    this.instances.shadowTarget = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1,0.1),
      new THREE.MeshBasicMaterial({color: 0x09F7F7})
    )
    this.instances.shadowTarget.visible = false    
    this.instances.shadowTarget.name = 'shadowTarget'
    this.instances.shadowLight.target = this.instances.shadowTarget
    
    
  }
}
export default new Light()