"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Mountain1 from "./components/Icons/Mountain1";
import Mountain2 from "./components/Icons/Mountain2";
import Mountain3 from "./components/Icons/Mountain3";
import Moon from "./components/Icons/Moon";
import { Model } from "./components/Models/Model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Tecnologies from "./components/tecnologies/tecnologies";
import About from "./components/about/about";

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);
	const navigationRef = useRef<HTMLDivElement>(null);
	const moonRef = useRef<HTMLDivElement>(null);
	const mountain1Ref = useRef<HTMLDivElement>(null);
	const mountain2Ref = useRef<HTMLDivElement>(null);
	const mountain3Ref = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
	}

	useGSAP(
		() => {
			gsap.to(navigationRef.current, {
				y: 550,
				scrollTrigger: {
					trigger: mountain3Ref.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});

			gsap.to(moonRef.current, {
				y: 550,
				scrollTrigger: {
					trigger: mountain3Ref.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});
			gsap.to(mountain3Ref.current, {
				y: 350,
				scrollTrigger: {
					trigger: mountain3Ref.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});
			gsap.to(mountain2Ref.current, {
				y: 180,
				scrollTrigger: {
					trigger: mountain2Ref.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});
			gsap.to(mountain1Ref.current, {
				y: 50,
				scrollTrigger: {
					trigger: mountain1Ref.current,
					start: "bottom bottom",
					end: "bottom top",
					scrub: true,
				},
			});
			gsap.to(textRef.current, {
				y: 10,
				scrollTrigger: {
					trigger: mountain3Ref.current,
					start: "bottom bottom",
					end: "top top",
					scrub: true,
				},
			});
		},
		{ scope: containerRef }
	);

	return (
		<>
			<div
				ref={containerRef}
				className="relative h-screen overflow-hidden "
				style={{
					background: "linear-gradient(0deg, #030016 5%, #efefef 100%)",
				}}
			>
				<header ref={navigationRef} className="w-screen mt-6">
					<nav className="flex justify-center gap-6 text-slate-950 mt-6 flex-wrap">
						<a href="#about">about</a>
						<a href="#experience">experience</a>
						<a href="#projects">projects</a>
						<a href="#contact">contact</a>
					</nav>
				</header>

				<div ref={moonRef} className="absolute right-1/4 top-1/4">
					<img src="/images/parallax/moon.png" alt="" />
				</div>

				<div
					ref={mountain3Ref}
					className="absolute bottom-0 align-bottom w-screen flex justify-center"
				>
					<div
						ref={textRef}
						className="absolute font-koulen mt-48 text-slate-950"
					>
						<p className="text-2xl text-center flex items-start ml-2">
							&#60;HELLO, I'M&#62;
						</p>
						<p className="text-[200px] text-center leading-[146px]">KLAYVER</p>
					</div>

					<img src="/images/parallax/mountain3.png" alt="" />
					{/* <Mountain3 /> */}
				</div>

				<div ref={mountain2Ref} className="absolute bottom-0 w-screen">
					<img src="/images/parallax/mountain2.png" alt="" />
					{/* <Mountain2 /> */}
				</div>

				<div ref={mountain1Ref} className="absolute bottom-0 w-screen">
					<img src="/images/parallax/mountain1.png" alt="" />
					{/* <Mountain1 /> */}
				</div>
			</div>

			<div
				id="about"
				className="bg-[#030016] flex flex-col justify-center items-center p-12 sm:md:flex-row"
			>
				<div className="w-full sm:md:w-2/5 sm:md:h-1/2">
					<Canvas orthographic camera={{ position: [0, 0, 300] }}>
						<OrbitControls />
						<Model />
						<Environment preset="studio" />
					</Canvas>
				</div>

				<div className="w-full h-full sm:md:w-3/5">
					<About paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo pretium, convallis ante eget, maximus est. Suspendisse dapibus odio felis, vel blandit tortor tristique at. Suspendisse hendrerit, mauris eu pulvinar hendrerit, enim purus pulvinar velit, nec tincidunt est tellus eleifend tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt placerat euismod. Vestibulum quis est egestas, finibus massa eget, aliquam leo. Etiam lacinia pulvinar diam. Ut quis molestie felis, quis semper ipsum. Fusce aliquet massa ornare lectus pellentesque varius. Ut vestibulum augue ultrices lectus venenatis luctus. Donec ipsum sapien, lacinia ut elementum eu, pretium vitae est. Vestibulum fermentum odio tristique pretium laoreet. Proin at lorem at urna aliquam aliquam. In fringilla est aliquet tempus varius. Pellentesque fringilla sed tellus eu sodales." />
				</div>
			</div>

			<div
				id="experience"
				className="h-screen bg-[#030016] flex justify-center items-center"
			>
				<Tecnologies />
			</div>

			<div
				id="projects"
				className="h-screen bg-[#030016] flex justify-center items-center"
			>
				<h1 className="font-bold text-3xl sm:md:text-9xl text-wrap text-slate-200 text-center">
					PROJECTS
				</h1>
			</div>

			<div
				id="contact"
				className="h-screen bg-[#030016] flex justify-center items-center"
			>
				<h1 className="font-bold text-3xl sm:md:text-9xl text-slate-200 text-center">
					CONTACT
				</h1>
			</div>
		</>
	);
}
