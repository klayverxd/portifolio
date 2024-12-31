import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";

import { motion, useScroll, MotionValue, useTransform } from "motion/react";

function Tecnologies() {
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
		useScroll({
			target: container,

			offset: ["start end", "end start"],
		});

	function Group({ images }: { images: string[] }) {
		return (
			<>
				{images.map((image: string, index: number) => (
					<div key={index} className={"py-5 px-2 flex items-center"}>
						<span className="relative h-[7.5vw] max-h-[6vw] aspect-[2/1] rounded-full overflow-hidden bg-[white]">
							<Image
								className="p-4"
								style={{ objectFit: "contain" }}
								src={image}
								alt="image"
								fill
							/>
						</span>
					</div>
				))}
			</>
		);
	}

	function Slide({
		images,
		direction,
		left,
		progress,
	}: {
		images: string[];
		direction: "left" | "right";
		left: string;
		progress: MotionValue<number>;
	}) {
		const directionSlide = direction === "left" ? -1 : 1;

		const translateX = useTransform(
			progress,
			[0, 1],
			[1000 * directionSlide, -1000 * directionSlide]
		);

		return (
			<motion.div
				style={{ x: translateX, left: left }}
				className="relative flex whitespace-nowrap"
			>
				<Group images={images} />
				<Group images={images} />
				<Group images={images} />
				<Group images={images} />
			</motion.div>
		);
	}

	return (
		<div className="overflow-hidden">
			<Slide
				images={[
					"/images/logos/css.png",
					"/images/logos/html.png",
					"/images/logos/react.png",
					"/images/logos/svelte.png",
					"/images/logos/typescript.png",
					"/images/logos/hbs.png",
					"/images/logos/nodejs.png",
				]}
				direction={"left"}
				left={"-40%"}
				progress={scrollYProgress}
			/>

			<Slide
				images={[
					"/images/logos/tailwind.png",
					"/images/logos/bootstrap.png",
					"/images/logos/styled-components.png",
					"/images/logos/threejs.png",
					"/images/logos/babylonjs.png",
					"/images/logos/chackra.png",
					"/images/logos/figma.png",
					"/images/logos/sass.png",
				]}
				direction={"right"}
				left={"-25%"}
				progress={scrollYProgress}
			/>

			<Slide
				images={[
					"/images/logos/git.png",
					"/images/logos/github.png",
					"/images/logos/trello.png",
					"/images/logos/bitbucket.png",
					"/images/logos/slack.png",
					"/images/logos/jira.png",
					"/images/logos/vscode.png",
				]}
				direction={"left"}
				left={"-75%"}
				progress={scrollYProgress}
			/>
		</div>
	);
}

export default Tecnologies;
