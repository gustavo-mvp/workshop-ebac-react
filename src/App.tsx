import { useState } from "react";

import "./App.sass";
import GridSelector from "./components/GridSelector";

function App() {
	const [sqPoint, setSqPoint] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

	function handleClickedSquare(x: number, y: number) {
		setSqPoint({ x, y });
	}

	return (
		<div className="modal__container">
			<h1 className="modal__title">Grid Selection</h1>

			<GridSelector
				onClickingSquare={handleClickedSquare}
				x={18}
				y={10}
			/>

			<footer className="modal__footer">
				<p className="modal__footer__coordinates">
					Selection coordinates{" "}
					<strong className="modal__footer__coordinates_values">{`( ${sqPoint.x}, ${sqPoint.y} )`}</strong>
				</p>

				<p className="modal__footer__coordinates">
					Total cells selected:{" "}
					<strong className="modal__footer__coordinates_values">{sqPoint.x * sqPoint.y}</strong>
				</p>
			</footer>
		</div>
	);
}

export default App;
