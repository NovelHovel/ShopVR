import React from 'react';
import {Entity, Scene} from 'aframe-react'
import ClothingMapper from './clothingMapper.jsx'
import CashierCounter from './cashierCounter.jsx'
// var extras = require('aframe-extras');
// extras.registerAll();

var dimensions = {
  fullLength: 50,
  fullWidth: 40,
  frontGrassLength: 10,
  sideGrassesLength: 35,
  sideGrassesWidth: 5,
  sideGrassX: 22.5,
  sideGrassZ: 17.5,
  backGrassZ: 42.5,
  grassMaterial: 'src: url(./lib/grass.jpg); repeat: 25 25',
  sidefenceLength: 50,
  backFenceLength: 40,
  fenceHeight: 2,
  wallHeight: 4,
  sideWallLength: 35,
  backWallLength: 30,
  mallMaterial: 'color: grey',
  ceilingMaterial: 'color: grey',
  fenceColor: 'grey',
  entranceSides: 13,
  ceilingWidth: 30,
  ceilingLength: 35,
  glassMaterial: 'opacity: 0.7',
  glassHeight: 3
}

class Setting extends React.Component {

  constructor(props){
    super(props);
  }
  render() {
      return(
        <div>
          <Scene physics>
            <Entity id="camera" active camera position="0 1.8 0" rotation="0 0 0" universal-controls kinematic-body jump-ability="maxJumps: 100;">
              <Entity cursor="maxDistance: 30"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusOuter: 0.007; radiusInner: 0.004;"
                    material="color: black; shader: flat" >
              </Entity>
            </Entity>

            <Entity
              geometry={{primitive: 'sphere', radius: 100}}
              material={{shader: 'flat', src: "url(./lib/skybox.jpg)"}}
              scale="1 1 -1"
              position= '0 0 0'
            />

            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.frontGrassLength, width: dimensions.fullWidth}} rotation="-90 90 0" position="0 0 0" static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.fullWidth}} rotation="-90 90 0" position={dimensions.backGrassZ+ "0 0"} static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.sideGrassesLength}} rotation="-90 0 0" position="22.5 0 17.5" static-body/>
            <Entity material={dimensions.grassMaterial} geometry={{primitive: 'plane', height: dimensions.sideGrassesWidth, width: dimensions.sideGrassesLength}} rotation="-90 0 0" position="22.5 0 -17.5" static-body/>

            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.sidefenceLength}} rotation="0 0 0" position="20 1 -20" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.sidefenceLength}} rotation="0 -180 0" position="20 1 20" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.backFenceLength}} rotation="0 90 0" position="-5 1 0" static-body/>
            <Entity material={'color:' + dimensions.fenceColor} geometry={{primitive: 'plane', height: dimensions.fenceHeight, width: dimensions.backFenceLength}} rotation="0 -90 0" position="45 1 0" static-body/>


            <Entity material= {dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 0 0" position="22.5 2 -15" static-body/>
            <Entity material= {dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 -180 0" position="22.5 2 -15" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 0 0" position="22.5 2 15" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.sideWallLength}} rotation="0 -180 0" position="22.5 2 15" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.backWallLength}} rotation="0 90 0" position="40 2 0" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.backWallLength}} rotation="0 -90 0" position="40 2 0" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 -90 0" position="5 2 -8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 -90 0" position="5 2 8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 90 0" position="5 2 -8.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: dimensions.wallHeight, width: dimensions.entranceSides}} rotation="0 90 0" position="5 2 8.5" static-body/>

            <Entity material={dimensions.ceilingMaterial} geometry={{primitive: 'box', depth: '.5', height: dimensions.ceilingLength, width: dimensions.ceilingWidth}} rotation="90 90 0" position="22.5 4.25 0" static-body/>
            <Entity material={'color: grey'} geometry={{primitive: 'plane', height: dimensions.ceilingLength, width: dimensions.ceilingWidth}} rotation="-90 90 0" position="22.5 0 0" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="17 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="17 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="16 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="16 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="27 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="27 2 -10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 90 0" position="27 2 10" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'plane', height: 4, width: 10}} rotation="0 -90 0" position="27 2 10" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="5.5 2 2.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="5.5 2 -2.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="5.5 2 5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="5.5 2 -5" static-body/>

            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="17 2 5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="27 2 5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="27 2 -5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height:'4', width:'1'}} position="16 2 -5" static-body/>


            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', radius: '.5', depth: '1', height:'4', width:'1'}} position="27 2 -2.5" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', radius: '.5', depth: '1', height:'4', width:'1'}} position="27 2 2.5" static-body/>
            
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 4, width: 2.5}} rotation="0 90 0" position="27 2 -3.75" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 4, width: 2.5}} rotation="0 90 0" position="27 2 3.75" static-body/>
            <Entity material={dimensions.mallMaterial} geometry={{primitive: 'box', depth: '1', height: 1, width: 6}} rotation="0 90 0" position="27 3.5 0" static-body/>
            
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.3}} rotation="0 0 0" position="7.16 1.5 -5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.3}} rotation="0 0 0" position="13.85 1.5 -5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 1, width: 11}} rotation="0 0 0" position="10.8 3.5 -5" static-body/>

            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.3}} rotation="0 0 0" position="18.15 1.5 -5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.3}} rotation="0 0 0" position="24.85 1.5 -5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 1, width: 11}} rotation="0 0 0" position="21.8 3.5 -5" static-body/>
            
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.8}} rotation="0 0 0" position="7.5 1.5 5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 4.8}} rotation="0 0 0" position="14.6 1.5 5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 1, width: 12}} rotation="0 0 0" position="11.1 3.5 5" static-body/>

            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 3.8}} rotation="0 0 0" position="18.9 1.5 5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: dimensions.glassHeight, width: 3.8}} rotation="0 0 0" position="25.1 1.5 5" static-body/>
            <Entity material={dimensions.glassMaterial} geometry={{primitive: 'box', depth: '.05', height: 1, width: 10}} rotation="0 0 0" position="22 3.5 5" static-body/>


            <CashierCounter position={["11 .8 12.7", "11 1.625 12.4", "11 1.7 12.4", "11 2.1 12.4"]}/>
            <CashierCounter position={["21.5 .8 12.7", "21.5 1.625 12.4", "21.5 1.7 12.4", "21.5 2.1 12.4"]}/>
            <CashierCounter position={["11 .8 -12.7", "11 1.625 -12.4", "11 1.7 -12.4", "11 2.1 -12.4"]}/>
            <CashierCounter position={["21.5 .8 -12.7", "21.5 1.625 -12.4", "21.5 1.7 -12.4", "21.5 2.1 -12.4"]}/>

            <ClothingMapper />

          </Scene>
        </div>
      )
    }
}
export default Setting;
