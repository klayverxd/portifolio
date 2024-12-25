"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Mountain1 from "./components/Icons/Mountain1";
import Mountain2 from "./components/Icons/Mountain2";
import Mountain3 from "./components/Icons/Mountain3";
import Moon from "./components/Icons/Moon";
import Link from "next/link";

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
						<a href="#home">home</a>
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
					className="absolute bottom-0 align-bottom w-screen"
				>
					<h1
						ref={textRef}
						className="text font-bold text-9xl w-screen mt-64 text-slate-950 absolute text-center"
					>
						KLAYVER
					</h1>

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
				id="home"
				className="h-screen bg-[#030016] flex justify-center items-center border-2 border-[#EFEFEF]"
			>
				<h1 className="font-bold text-9xl text-slate-200 text-center">HOME</h1>
			</div>

			<div
				id="about"
				className="h-screen bg-[#030016] flex justify-center items-center border-2 border-[#EFEFEF]"
			>
				<h1 className="font-bold text-9xl text-slate-200 text-center">ABOUT</h1>
			</div>

			<div
				id="experience"
				className="h-screen bg-[#030016] flex justify-center items-center border-2 border-[#EFEFEF]"
			>
				<h1 className="font-bold text-9xl text-slate-200 text-center">
					EXPERIENCE
				</h1>
			</div>

			<div
				id="projects"
				className="h-screen bg-[#030016] flex justify-center items-center border-2 border-[#EFEFEF]"
			>
				<h1 className="font-bold text-9xl text-slate-200 text-center">
					PROJECTS
				</h1>
			</div>

			<div
				id="contact"
				className="h-screen bg-[#030016] flex justify-center items-center border-2 border-[#EFEFEF]"
			>
				<h1 className="font-bold text-9xl text-slate-200 text-center">
					CONTACT
				</h1>
			</div>
		</>
	);
}
