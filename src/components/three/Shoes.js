import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";

export default function Shoes() {
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 50 }}>
			<Suspense fallback={null}>
				<Stage environment="city" intensity={0.5}>
					<Shoe position={[0, 0, 0]} />
					<Shoe scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
				</Stage>
			</Suspense>
			<OrbitControls autoRotate />
		</Canvas>
	);
}
