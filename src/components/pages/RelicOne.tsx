import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense} from "react";
import Relic from "../3d/Relic";

export default function RelicOne() {
  const { player } = useXR();

  return (

    <VRCanvas>
      <DefaultXRControllers />

      {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
      {/*<OrbitControls enableZoom={true} enablePan={false} minZoom={Math.PI/2} maxZoom={Math.PI/3} />*/}
      <OrbitControls enableZoom={true} enablePan={false} minDistance={4} maxDistance={10} />

      <ambientLight/>
      <pointLight intensity={3} position={[0, 0, 0]}/>
      <PerspectiveCamera position={[-5,5,-5]} makeDefault/>

      <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
        <Relic />
      </Suspense>
    </VRCanvas>
  )
}
