import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function About({ paragraph }: { paragraph: string }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.9", "start 0.25"],
	});

	const words = paragraph.split(" ");

	return (
		<p ref={container} className="flex flex-wrap text-xl">
			{words.map((word: string, i: number) => {
				const start = i / words.length;
				const end = start + 1 / words.length;

				return (
					<Word key={i} progress={scrollYProgress} range={[start, end]}>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

function Word({ children, progress, range }: any) {
	const amount = range[1] - range[0];
	const step = amount / children.length;

	return (
		<span className="relative mr-[8px]">
			{children.split("").map((char: string, i: number) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Char key={`c_${i}`} progress={progress} range={[start, end]}>
						{char}
					</Char>
				);
			})}
		</span>
	);
}

function Char({ children, progress, range }: any) {
	const opacity = useTransform(progress, range, [0, 1]);

	return (
		<span>
			<span className="absolute opacity-20">{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
}
