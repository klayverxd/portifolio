"use client";

import { useRef, useState } from "react";
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
import Projects from "./components/projects/projects";
import BB8AnimatedModel from "./components/Models/BB8AnimatedModel";

import "../lib/i18n";
import { useTranslation } from "react-i18next";

export default function Home() {
	const {
		t,
		i18n: { changeLanguage },
	} = useTranslation();

	const containerRef = useRef<HTMLDivElement>(null);
	const navigationRef = useRef<HTMLDivElement>(null);
	const moonRef = useRef<HTMLDivElement>(null);
	const mountain1Ref = useRef<HTMLDivElement>(null);
	const mountain2Ref = useRef<HTMLDivElement>(null);
	const mountain3Ref = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	function handleLanguageChange(lang: string) {
		changeLanguage(lang);
	}

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
				<header
					ref={navigationRef}
					className="flex w-full mt-6 items-center px-6"
				>
					<div className="flex-1 flex justify-center">
						<nav className="flex gap-6 text-slate-950 flex-wrap">
							<a href="#about">{t("header.about")}</a>
							<a href="#experience">{t("header.experience")}</a>
							<a href="#projects">{t("header.projects")}</a>
							<a href="#contact">{t("header.contact")}</a>
							<a href="https://blog.klayver.dev" target="_blank">
								{t("header.blog")}
							</a>
						</nav>
					</div>

					<div className="flex gap-2">
						<button
							onClick={() => handleLanguageChange("pt")}
							className="text-slate-950"
						>
							pt
						</button>
						<span className="px-1 text-slate-950">|</span>

						<button
							onClick={() => handleLanguageChange("en")}
							className="text-slate-950"
						>
							en
						</button>
					</div>
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
							&#60;{t("parallax.greetings")}&#62;
						</p>
						<p className="text-[200px] text-center leading-[146px]">KLAYVER</p>
					</div>

					<img src="/images/parallax/mountain3.png" alt="" className="w-full" />
					{/* <Mountain3 /> */}
				</div>

				<div ref={mountain2Ref} className="absolute bottom-0 w-screen">
					<img src="/images/parallax/mountain2.png" alt="" className="w-full" />
					{/* <Mountain2 /> */}
				</div>

				<div ref={mountain1Ref} className="absolute bottom-0 w-screen">
					<img src="/images/parallax/mountain1.png" alt="" className="w-full" />
					{/* <Mountain1 /> */}
				</div>
			</div>

			<div
				id="about"
				className="h-screen bg-[#030016] flex flex-col justify-center items-center p-12 sm:md:flex-row"
			>
				<div className="w-full h-1/2 sm:md:w-2/5 sm:md:h-full">
					<Canvas orthographic camera={{ position: [0, 100, 500] }}>
						<BB8AnimatedModel />
						<Environment preset="forest" />
					</Canvas>
				</div>

				<div className="w-full h-full sm:md:w-3/5 flex justify-center items-center">
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
				<Projects />
			</div>

			<div
				id="contact"
				className="mt-[470vh] h-screen bg-[#030016] flex justify-center items-center"
			>
				<h1 className="font-bold text-3xl sm:md:text-9xl text-slate-200 text-center">
					CONTACT
				</h1>
			</div>
		</>
	);
}
