import { HTMLAttributes } from "react";

const Container = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`container ${props.className}`} {...props}>
			{props.children}
		</div>
	);
};

export default Container;
