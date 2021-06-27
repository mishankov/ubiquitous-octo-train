import * as THREE from 'three';

export class ObjectWrapper {
    actualObject: THREE.Mesh;

    constructor(object: THREE.Mesh) {
        this.actualObject = object;
    }

    animation() {}

    logObjectState() {
        console.log('POSITION x: ' + this.actualObject.position.x + '; y: ' + this.actualObject.position.y + '; z: ' + this.actualObject.position.z);
        console.log('ROTATION x: ' + THREE.MathUtils.radToDeg(this.actualObject.rotation.x) + '; y: ' + THREE.MathUtils.radToDeg(this.actualObject.rotation.y) + '; z: ' + THREE.MathUtils.radToDeg(this.actualObject.rotation.z));
    }
}