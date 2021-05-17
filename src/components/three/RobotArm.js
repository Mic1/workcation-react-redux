import { useEffect, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as dat from "dat.gui";

const RobotArm = () => {
	// Debug
	const gui = new dat.GUI();
	gui.width = 400;

	const mountRef = useRef(null);

	useEffect(() => {
		//								Scene
		var scene = new THREE.Scene();

		//                Models
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath("/draco/");

		const gltfLoader = new GLTFLoader();
		gltfLoader.setDRACOLoader(dracoLoader);

		let mixer = null;

		gltfLoader.load("/models/arm.glb", (gltf) => {
			console.log("gltf: ", gltf.scene);
			scene.add(gltf.scene);
		});

		// textures
		const textureLoader = new THREE.TextureLoader();

		const grassColorTexture = textureLoader.load("/textures/grass/color.jpg");
		const grassAmbientOcclusionTexture = textureLoader.load(
			"/textures/grass/ambientOcclusion.jpg"
		);
		const grassNormalTexture = textureLoader.load("/textures/grass/normal.jpg");
		const grassRoughnessTexture = textureLoader.load(
			"/textures/grass/roughness.jpg"
		);

		grassColorTexture.repeat.set(8, 8);
		grassAmbientOcclusionTexture.repeat.set(8, 8);
		grassNormalTexture.repeat.set(8, 8);
		grassRoughnessTexture.repeat.set(8, 8);

		grassColorTexture.wrapS = THREE.RepeatWrapping;
		grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
		grassNormalTexture.wrapS = THREE.RepeatWrapping;
		grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

		grassColorTexture.wrapT = THREE.RepeatWrapping;
		grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
		grassNormalTexture.wrapT = THREE.RepeatWrapping;
		grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

		//                        Floor
		const floor = new THREE.Mesh(
			new THREE.PlaneGeometry(50, 50),
			new THREE.MeshStandardMaterial({
				map: grassColorTexture,
				aoMap: grassAmbientOcclusionTexture,
				normalMap: grassNormalTexture,
				roughnessMap: grassRoughnessTexture,
			})
		);
		floor.receiveShadow = true;
		floor.geometry.setAttribute(
			"uv2",
			new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
		);
		floor.rotation.x = -Math.PI * 0.5;
		scene.add(floor);

		//                          Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		scene.add(ambientLight);
		console.log("ambientLight: ", ambientLight);
		gui.add(ambientLight.color, "r");
		gui.add(ambientLight.color, "g");
		gui.add(ambientLight.color, "b");

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
		directionalLight.castShadow = true;
		directionalLight.shadow.mapSize.set(1024, 1024);
		directionalLight.shadow.camera.far = 15;
		directionalLight.shadow.camera.left = -7;
		directionalLight.shadow.camera.top = 7;
		directionalLight.shadow.camera.right = 7;
		directionalLight.shadow.camera.bottom = -7;
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		//													Sizes
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		//                          Camera
		// Base camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		);
		camera.position.set(-8, 4, 8);
		scene.add(camera);

		//                      Resize
		window.addEventListener("resize", () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		//                    Renderer
		const renderer = new THREE.WebGLRenderer();
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		mountRef.current.appendChild(renderer.domElement);
		// IMPORTANT! copy mountRef to variable and use variable in cleanup routine
		let mr = mountRef.current;

		//                        Controls
		const controls = new OrbitControls(camera, mr);
		controls.target.set(0, 1, 0);
		controls.enableDamping = true;

		//									Animate
		const clock = new THREE.Clock();
		let previousTime = 0;

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();
			const deltaTime = elapsedTime - previousTime;
			previousTime = elapsedTime;

			if (mixer) {
				mixer.update(deltaTime);
			}

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();

		return () => mr.removeChild(renderer.domElement);
	}, []);

	return <div ref={mountRef}></div>;
};

export default RobotArm;
