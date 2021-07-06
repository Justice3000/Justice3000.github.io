import React from "react";
import * as THREE from "three";

export class Graphic extends React.Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial( { color: 0x4F2F4F, wireframe: true } );

    var geometry1 = new THREE.BoxGeometry( 2, 2, 2 );
    var material1 = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } );
    
    var cube = new THREE.Mesh( geometry, material );
    var cube1 = new THREE.Mesh( geometry1, material1 );



    scene.add( cube);
    scene.add( cube1 );


    camera.position.z = 3;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      cube1.rotation.x += 0.02;
      cube1.rotation.y += 0.001;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}