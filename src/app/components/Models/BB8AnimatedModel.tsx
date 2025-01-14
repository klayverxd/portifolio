import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
	nodes: {
		BB8BB8_Body_Scene_Material_0: THREE.Mesh;
		BB8BB8_Body_Scene_Material_0_1: THREE.Mesh;
		BB8Hatch_Door_Scene_Material_0: THREE.Mesh;
		BB8Antena_Scene_Material1_0: THREE.Mesh;
		BB8BB8_Head_Scene_Material1_0: THREE.Mesh;
		BB8BB8_Head_Scene_Material1_0_1: THREE.Mesh;
		BB8Eye_Eye_0: THREE.Mesh;
	};
	materials: {
		Scene_Material: THREE.MeshStandardMaterial;
		Scene_Material1: THREE.MeshStandardMaterial;
		material: THREE.MeshStandardMaterial;
	};
};

export default function BB8AnimatedModel(
	props: JSX.IntrinsicElements["group"]
) {
	const group = useRef<THREE.Group | null>();
	const { nodes, materials, animations } = useGLTF(
		"/models/bb8_animated.glb"
	) as GLTFResult;
	console.info(`🪲 ~ animations: `, animations);
	const { actions } = useAnimations<THREE.AnimationClip>(animations, group);

	const headRef = useRef<THREE.Group>(null);
	const mouse = useRef(new THREE.Vector2(0, 0));
	const [mouseStopped, setMouseStopped] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const handleMouseMove = (event: MouseEvent) => {
			mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

			setMouseStopped(false);
			clearTimeout(timeout);
			timeout = setTimeout(() => setMouseStopped(true), 5000);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(timeout);
		};
	}, []);

	useEffect(() => {
		if (mouseStopped && actions?.Animation) {
			actions.Animation.reset().fadeIn(0.5).play();
			actions.Animation.setLoop(THREE.LoopOnce, 1);
		}
	}, [mouseStopped, actions]);

	const handleModelClick = () => {
		if (actions?.Animation) {
			actions.Animation.reset().fadeIn(0.5).play();
		}
	};

	useFrame(() => {
		if (headRef.current && group.current) {
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

			const bodyRotationFactor = 0.2;
			const bodyPositionFactor = 0.1;

			group.current.rotation.x = THREE.MathUtils.lerp(
				group.current.rotation.x,
				targetY * bodyRotationFactor,
				0.1
			);
			group.current.rotation.y = THREE.MathUtils.lerp(
				group.current.rotation.y,
				targetX * bodyRotationFactor,
				0.1
			);

			group.current.position.x = THREE.MathUtils.lerp(
				group.current.position.x,
				mouse.current.x * bodyPositionFactor,
				0.1
			);
			group.current.position.z = THREE.MathUtils.lerp(
				group.current.position.z,
				-mouse.current.y * bodyPositionFactor,
				0.1
			);
		}
	});

	return (
		<group
			{...props}
			ref={group as React.MutableRefObject<THREE.Group>}
			dispose={null}
			scale={[1.5, 1.5, 1.5]}
			onClick={handleModelClick}
		>
			<group
				ref={headRef}
				name="BB8Center_Head_NeutralPose"
				position={[0, -25, 0]}
			>
				<group name="BB8Center_Head">
					<group name="BB8Antena">
						<mesh
							name="BB8Antena_Scene_Material1_0"
							castShadow
							receiveShadow
							geometry={nodes.BB8Antena_Scene_Material1_0.geometry}
							material={materials.Scene_Material1}
						/>
					</group>
					<group name="BB8BB8_Head">
						<mesh
							name="BB8BB8_Head_Scene_Material1_0"
							castShadow
							receiveShadow
							geometry={nodes.BB8BB8_Head_Scene_Material1_0.geometry}
							material={materials.Scene_Material1}
						/>
						<mesh
							name="BB8BB8_Head_Scene_Material1_0_1"
							castShadow
							receiveShadow
							geometry={nodes.BB8BB8_Head_Scene_Material1_0_1.geometry}
							material={materials.Scene_Material1}
						/>
					</group>
					<group name="BB8Eye">
						<mesh
							name="BB8Eye_Eye_0"
							castShadow
							receiveShadow
							geometry={nodes.BB8Eye_Eye_0.geometry}
							material={materials.material}
						/>
					</group>
				</group>
			</group>

			<group name="BB8Center_NeutralPose" position={[0, -25, 0]}>
				<group name="BB8Center">
					<group name="BB8BB8_Body">
						<mesh
							name="BB8BB8_Body_Scene_Material_0"
							castShadow
							receiveShadow
							geometry={nodes.BB8BB8_Body_Scene_Material_0.geometry}
							material={materials.Scene_Material}
						/>
						<mesh
							name="BB8BB8_Body_Scene_Material_0_1"
							castShadow
							receiveShadow
							geometry={nodes.BB8BB8_Body_Scene_Material_0_1.geometry}
							material={materials.Scene_Material}
						/>
					</group>
					<group name="BB8Hatch_Door">
						<mesh
							name="BB8Hatch_Door_Scene_Material_0"
							castShadow
							receiveShadow
							geometry={nodes.BB8Hatch_Door_Scene_Material_0.geometry}
							material={materials.Scene_Material}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/models/bb8_animated.glb");
