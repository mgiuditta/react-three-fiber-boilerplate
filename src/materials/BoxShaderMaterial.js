import {shaderMaterial} from "@react-three/drei";
import * as THREE from 'three';

import vertexShader from '../assets/shaders/box/vertexFragment.glsl';
import fragmentShader from '../assets/shaders/box/fragmentShader.glsl';


const BoxShaderMaterial = shaderMaterial(
    {uColor: new THREE.Color(0.9, 0.0, 0.1)},
    vertexShader,
    fragmentShader
)

export default BoxShaderMaterial;
