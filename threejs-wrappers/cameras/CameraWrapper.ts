import * as THREE from 'three';
import { MoveDirection } from '../utils';


export class CameraWrapper {
    actualCamera: THREE.PerspectiveCamera;
    folowedObject: THREE.Mesh;

    constructor(camera: THREE.PerspectiveCamera) {
        this.actualCamera = camera
    }

    setFollowedObject(object: THREE.Mesh) {
        this.folowedObject = object;
    }

    deleteFollowedObject() {
        delete this.folowedObject;
    }

    move(direction?: MoveDirection, speed = 1) {
        if (this.folowedObject === undefined && direction !== undefined) {
            switch (direction) {
                case MoveDirection.Forward:
                    this.actualCamera.translateZ(-speed);
                    break;
                case MoveDirection.Backward:
                    this.actualCamera.translateZ(speed);
                    break;
                case MoveDirection.Left:
                    this.actualCamera.translateX(-speed);
                    break;
                case MoveDirection.Right:
                    this.actualCamera.translateX(speed);
                    break;
            }
        } 
        else if (this.folowedObject !== undefined) {
            this.actualCamera.position.set(
                this.folowedObject.position.x + Math.sin(-this.folowedObject.rotation.y) * 30,
                this.folowedObject.position.y + 20,
                this.folowedObject.position.z - Math.cos(this.folowedObject.rotation.y) * 30
            );
        
            this.actualCamera.lookAt(this.folowedObject.position);
        }       
    }

    rotate(x: number, y: number) {
        this.actualCamera.rotateX(x);
        this.actualCamera.rotateY(y);
    }

    logCameraState() {
        console.log('POSITION x: ' + this.actualCamera.position.x + '; y: ' + this.actualCamera.position.y + '; z: ' + this.actualCamera.position.z);
        console.log('ROTATION x: ' + THREE.MathUtils.radToDeg(this.actualCamera.rotation.x) + '; y: ' + THREE.MathUtils.radToDeg(this.actualCamera.rotation.y) + '; z: ' + THREE.MathUtils.radToDeg(this.actualCamera.rotation.z));
    }
}