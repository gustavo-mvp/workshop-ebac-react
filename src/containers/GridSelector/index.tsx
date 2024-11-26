import { useRef, useEffect, useState } from "react";
import "./styles.sass";

interface GridProps {
	x: number;
	y: number;
	onClickingSquare: (x: number, y: number) => void;
}

export default function GridSelector({ x, y, onClickingSquare }: GridProps) {
	const gridSelector = useRef<HTMLDivElement>(null);
	const [parentAttributes, setParentAttributes] = useState<{ width: number; height: number }>({
		width: 0,
		height: 0,
	});
	const [clickedPosition, setClickedPosition] = useState<number>(-1);

	useEffect(() => {
		if (gridSelector.current) {
			const { width, height } = gridSelector.current.getBoundingClientRect();
			setParentAttributes({ width, height });
		}
	}, [x, y]);

	const emptySquares = Array.from(
		{
			length: x * y,
		},
		(_, k: number) => k + 1
	);

	function toCalculateMaxWidthAndHeightOfSquare() {
		const maxWidth = ((parentAttributes.width - 6 * (x - 1) - 16) / x).toString() + "px";
		const maxHeight = ((parentAttributes.height - 6 * (y - 1) - 16) / y).toString() + "px";

		return { maxWidth, maxHeight };
	}

	function handleClick(rec: number) {
		setClickedPosition(rec);

		const row = Math.ceil(rec / x);
		const column = rec % x === 0 ? x : rec % x;

		onClickingSquare(row, column);
	}

	return (
		<div
			ref={gridSelector}
			className="grid-selector"
			style={{
				gridTemplateColumns: `repeat(${x}, 1fr)`,
				gridTemplateRows: `repeat(${y}, 1fr`,
				maxHeight: "100%",
			}}>
			{emptySquares.map((rec) => (
				<div
					className={`grid-selector__square ${rec <= clickedPosition && clickedPosition > -1 ? "grid-selector__square--active" : ""}`}
					style={toCalculateMaxWidthAndHeightOfSquare()}
					key={rec}
					onClick={() => handleClick(rec)}></div>
			))}
		</div>
	);
}
