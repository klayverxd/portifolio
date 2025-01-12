import React, { useRef } from "react";
import Card from "./card";
import { useScroll } from "motion/react";

const projects = [
	{
		title: "Project 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus libero, ullamcorper ac ultricies quis, feugiat vel turpis. Proin aliquet felis ac est luctus accumsan. Maecenas lorem dolor, dapibus et nunc vitae, mattis maximus mauris. Nam neque quam, accumsan vel ex in, aliquam ornare risus.",
		src: "itatiaia.png",
		url: "https://www.klayver.dev",
		color: "#BBACAF",
	},
	{
		title: "Project 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus libero, ullamcorper ac ultricies quis, feugiat vel turpis. Proin aliquet felis ac est luctus accumsan. Maecenas lorem dolor, dapibus et nunc vitae, mattis maximus mauris. Nam neque quam, accumsan vel ex in, aliquam ornare risus.",
		src: "itatiaia.png",
		url: "https://www.klayver.dev",
		color: "#977F6D",
	},
	{
		title: "Project 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus libero, ullamcorper ac ultricies quis, feugiat vel turpis. Proin aliquet felis ac est luctus accumsan. Maecenas lorem dolor, dapibus et nunc vitae, mattis maximus mauris. Nam neque quam, accumsan vel ex in, aliquam ornare risus.",
		src: "itatiaia.png",
		url: "https://www.klayver.dev",
		color: "#C2491D",
	},
];

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
						key={`p_${i}`}
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
