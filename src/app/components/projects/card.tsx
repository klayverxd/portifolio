"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardProps {
	i: number;
	title: string;
	description: string;
	src: string;
	url: string;
	color: string;
	progress: any;
	range: [number, number];
	targetScale: number;
}

const Card = ({
	i,
	title,
	description,
	src,
	url,
	color,
	progress,
	range,
	targetScale,
}: CardProps) => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="h-screen flex items-center justify-center sticky top-0"
		>
			<motion.div
				style={{
					backgroundColor: color,
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className="relative flex flex-col h-[500px] w-[1000px] -top-[25%] rounded-[25px] p-[50px] transform-origin-top"
			>
				<h2 className="text-center m-0 text-[28px]">{title}</h2>
				<div className="flex flex-row h-full mt-[50px] gap-[50px]">
					<div className="relative w-[40%] top-[10%]">
						<p className="text-[16px]">
							<span className="text-[28px] font-title first-letter">
								{description[0]}
							</span>
							{description.slice(1)}
						</p>
						<span className="flex items-center gap-[5px]">
							<a
								href={url}
								target="_blank"
								className="text-[12px] underline cursor-pointer"
							>
								Ver mais
							</a>
						</span>
					</div>

					<div className="relative w-[60%] h-full rounded-[25px] overflow-hidden">
						<motion.div className="w-full h-full" style={{ scale: imageScale }}>
							<Image
								fill
								src={`/images/projects/${src}`}
								alt="image"
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Card;
