// https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-1-the-scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 20, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xfd59d7 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 100;

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 25 );
scene.add( light );



var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
};

render();

// dat gui
var gui = new dat.GUI();
var cameraGui = gui.addFolder("camera position");
cameraGui.add(camera.position, 'x');
cameraGui.add(camera.position, 'y');
cameraGui.add(camera.position, 'z');
cameraGui.open();

var cameraGui = gui.addFolder("camera projection");
cameraGui.add(camera, "fov");
cameraGui.open();

var lightGui = gui.addFolder("light position");
lightGui.add(light.position, 'x');
lightGui.add(light.position, 'y');
lightGui.add(light.position, 'z');
lightGui.open();

var cubeGui = gui.addFolder("cube position");
cubeGui.add(cube.position, 'x');
cubeGui.add(cube.position, 'y');
cubeGui.add(cube.position, 'z');
cubeGui.open();

// for(var i = 0; i < 50; i++) {
//     var s = Math.random() * 100;
//     var c = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0x00FFFF, 0xFF00FF];
//     var Geometry = new THREE.BoxGeometry(s, s, s);
//     var Material = new THREE.MeshLambertMaterial({color: 0xff00ff});
//     var Cube = new THREE.Mesh(Geometry, Material);
//     Scene.add(Cube);
//     console.log(Math.random() * 6);
// }
