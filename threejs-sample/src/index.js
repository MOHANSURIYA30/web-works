import * as THREE from '../node_modules/three/build/three.module';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

// const geometry = new THREE.BoxGeometry(1,1,1);
// const geometry = new THREE.ConeGeometry(5,10,8,20,0,6.2)
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cone = new THREE.Mesh( geometry, material );
// scene.add( cone );



function animate() {

    if (test)
    {

        test.rotation.y += 0.01;
        // test.rotation.x += 0.05;
    } 
  controls.update();
    requestAnimationFrame( animate );
    // cone.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};


// Instantiate a loader
const loader = new  GLTFLoader();
var test ;
// Load a glTF resource
loader.load(
// resource URL
'../gltf/vodoo.glb',
// called when the resource is loaded
function ( gltf ) {

// const light = new THREE.PointLight( "rgb(255, 255, 255)",2, 100 );
//                 light.position.set( 50, 50, 50 );
//                 scene.add( light );
scene.add( gltf.scene );

gltf.animations; // Array<THREE.AnimationClip>
test = gltf.scene; // THREE.Group
gltf.scenes; // Array<THREE.Group>
gltf.cameras; // Array<THREE.Camera>
gltf.asset; // Object

},
// called while loading is progressing
function ( xhr ) {

const light = new THREE.PointLight( "rgb(255, 255, 255)",2, 120 );
    light.position.set( 50, 50, 50 );
    scene.add( light );

camera.position.z =7 ; //for voodoo
camera.position.y = 1.5;
// camera.position.z =120 ; //for antenna
console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
function ( error ) {

console.log( 'An error happened' );
console.log(error);

}
);

animate();