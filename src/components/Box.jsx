import {extend} from "@react-three/fiber";
import BoxShaderMaterial from "../materials/BoxShaderMaterial.js";

extend({BoxShaderMaterial});

function Box() {
    return (
        <>
            <mesh>
                <boxShaderMaterial/>
                <boxGeometry args={[1, 1, 1]}/>
            </mesh>
        </>
    )
}

export default Box;
