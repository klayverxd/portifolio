import React, { useRef } from "react";
import Card from "./card";
import { useScroll } from "motion/react";
import { projects } from "@/app/constants/projects";

export default function Projects() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start start", "end end"],
	});

	return (
		<div className="relative mt-[150vh] bg-[#030016] w-full">
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.05;

				return (
					<Card
						key={`p_${project.title}`}
						i={i}
						{...project}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
		</div>
	);
}
