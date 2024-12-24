import * as React from "react";
export default function Moon(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={"100%"}
			height={"100%"}
			viewBox="0 0 401 401"
			fill="none"
			{...props}
		>
			<mask
				id="a"
				width={327}
				height={327}
				x={0}
				y={0}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: "alpha"
				}}
			>
				<path fill="#fff" d="M0 0h327v327H0z" />
			</mask>
			<g mask="url(#a)">
				<circle cx={163.246} cy={163.246} r={163.5} fill="#D3D3D3" />
				<mask
					id="b"
					width={328}
					height={328}
					x={-1}
					y={-1}
					maskUnits="userSpaceOnUse"
					style={{
						maskType: "alpha"
					}}
				>
					<circle
						cx={163.246}
						cy={163.246}
						r={163.5}
						fill="#D9D9D9"
						transform="rotate(-15 163.246 163.246)"
					/>
				</mask>
				<g mask="url(#b)">
					<circle
						cx={257.69}
						cy={-69.633}
						r={318}
						fill="#D7D7D7"
						transform="rotate(-15 257.69 -69.633)"
					/>
					<circle cx={209.746} cy={83.746} r={31} fill="#D2D2D2" />
				</g>
			</g>
		</svg>
	);
}
