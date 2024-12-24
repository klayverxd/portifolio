import * as React from "react";
export default function Mountain1(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={"100%"}
			height={"100%"}
			viewBox="0 0 1919 590"
			fill="none"
			{...props}
		>
			<path
				fill="#030016"
				d="M55.5 24.647 0 0v590h1919V0l-87.77 50.777-51.27 145.363-126.23 127.441-147.92 36.838-54.23 80.647-157.78-11.948-52.27 24.891-34.03 18.917-48-22.75-37.5 18.172-43.5-5.552-27.5 5.552-41.5-27.282-54 21.73-54.5 10.13-87.5-31.86-81.795-11.948-54.237-38.83-109.46-46.794L426.5 239.178 366 211.415l-52.5-20.695-37-59.06L218 80.678 108.5 65.03l-53-40.383Z"
			/>
			<path fill="url(#a)" d="M145 48h43v28h-43z" />
			<defs>
				<pattern
					id="a"
					width={1}
					height={1}
					patternContentUnits="objectBoundingBox"
				>
					<use xlinkHref="#b" transform="matrix(.0023 0 0 .00354 0 -.017)" />
				</pattern>
				<image
					xlinkHref="data:image/png;base64,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"
					id="b"
					width={434}
					height={292}
				/>
			</defs>
		</svg>
	);
}