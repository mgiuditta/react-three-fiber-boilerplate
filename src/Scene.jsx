import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Box from "./components/Box.jsx";


export function Scene() {

    return (
        <Canvas>
            <color attach="background" args={['#f3f0ff']}/>
            <OrbitControls makeDefault/>
            <Box/>
        </Canvas>
    )
}

export default Scene
