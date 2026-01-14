import { ReactNode, CSSProperties } from "react";
import { fixPolishOrphans } from "@/lib/typography";

interface PProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}

/**
 * Drop-in replacement for <p> that fixes Polish typography
 * by preventing orphans (short words like "z", "w", "i" at line ends).
 */
export const P = ({ children, className, style }: PProps) => {
	const processChildren = (node: ReactNode): ReactNode => {
		if (typeof node === "string") {
			return fixPolishOrphans(node);
		}
		return node;
	};

	return (
		<p className={className} style={style}>
			{processChildren(children)}
		</p>
	);
};
