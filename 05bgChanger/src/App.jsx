import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
	const [color, setColor] = useState("#313131");

	const allColors = [
		"Violet",
		"goldenrod",
		"olive",
		"pink",
		"orange",
		// "red",
		// "yellow",
		// "magenta",
		// "gray",
		// "aliceblue",
		// "goldenrod",
		// "purple",
	];

	return (
		<div
			className="w-full h-screen duration-200 p-4"
			style={{
				background: `linear-gradient(45deg, ${color},  #f3f3f3)`,
			}}
		>
			<h1 className="text-6xl text-center font-bold">Bg Changer</h1>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
					{allColors.map((color, idx) => {
						return <Buttons key={idx} color={color} setColor={setColor} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
