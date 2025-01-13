import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
	nodes: {
		Sphere001_1: THREE.Mesh;
		Sphere001_2: THREE.Mesh;
		Sphere001_3: THREE.Mesh;
		Sphere001_4: THREE.Mesh;
		Sphere002: THREE.Mesh;
		Sphere003: THREE.Mesh;
		Cylinder: THREE.Mesh;
		Cylinder001: THREE.Mesh;
		Sphere: THREE.Mesh;
	};
	materials: {
		["Material.001"]: THREE.MeshStandardMaterial;
		["Material.005"]: THREE.MeshStandardMaterial;
		["Material.006"]: THREE.MeshStandardMaterial;
		["Material.007"]: THREE.MeshStandardMaterial;
		["Material.002"]: THREE.MeshStandardMaterial;
		["Material.003"]: THREE.MeshStandardMaterial;
		["Material.004"]: THREE.MeshStandardMaterial;
	};
};

export default function BB8Model(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("/models/bb8.glb") as GLTFResult;
	const headRef = useRef<THREE.Group>(null);
	const mouse = useRef(new THREE.Vector2(0, 0));

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useFrame(() => {
		if (headRef.current) {
			const factorY = 1 - (mouse.current.x + 1) / 2;

			const targetX = mouse.current.x * Math.PI * 0.5 + factorY;
			const targetY = -mouse.current.y * Math.PI * 0.3;

			headRef.current.rotation.x = THREE.MathUtils.lerp(
				headRef.current.rotation.x,
				targetY,
				0.1
			);
			headRef.current.rotation.y = THREE.MathUtils.lerp(
				headRef.current.rotation.y,
				targetX,
				0.1
			);
		}
	});

	return (
		<group {...props} dispose={null} scale={[100, 100, 100]}>
			<group ref={headRef}>
				<group position={[0, 1.042, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere001_1.geometry}
						material={materials["Material.001"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere001_2.geometry}
						material={materials["Material.005"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere001_3.geometry}
						material={materials["Material.006"]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere001_4.geometry}
						material={materials["Material.007"]}
					/>
				</group>
				<group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere002.geometry}
						material={materials["Material.002"]}
						position={[-0.01, 1.29, 0.433]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Sphere003.geometry}
						material={materials["Material.003"]}
						position={[0.157, 1.158, 0.463]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder.geometry}
						material={nodes.Cylinder.material}
						position={[0.097, 1.616, -0.29]}
						scale={[0.025, 0.219, 0.025]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder001.geometry}
						material={nodes.Cylinder001.material}
						position={[-0.02, 1.616, -0.117]}
						rotation={[-Math.PI, 0, -Math.PI]}
						scale={[-0.011, -0.126, -0.011]}
					/>
				</group>
			</group>

			{/* body */}
			<group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Sphere.geometry}
					material={materials["Material.004"]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/models/bb8.glb");
