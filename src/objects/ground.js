class Ground{
  constructor(){
    this.instance = {}
  }
  init(){
    const groundGeometry = new THREE.PlaneGeometry(200, 200)
    const material = new THREE.ShadowMaterial({
      transparent: true,
      color: 0x000000,
      opacity:0.3,
    })
    this.instance = new THREE.Mesh(groundGeometry, material)
    this.instance.rotation.x = -Math.PI/2;
    this.instance.position.y = -16/3.2;
    this.instance.receiveShadow = true;
  }
}

export default new Ground()