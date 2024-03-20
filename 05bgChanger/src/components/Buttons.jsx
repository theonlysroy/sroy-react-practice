import React from "react";

export default function Buttons({ color, setColor }) {
	String.prototype.toSentenceCase = function () {
		const startAlphabet = this[0].toUpperCase();
		const restWord = this.substring(1).toLowerCase();
		if (this[0].codePointAt() >= 97) {
			return startAlphabet + restWord;
		} else {
			return this[0] + restWord;
		}
	};

	function clickHandler() {
		setColor(color);
	}

	// let color = "violeT";
	return (
		<button
			className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
			style={{ backgroundColor: color }}
			onClick={clickHandler}
		>
			{color.toSentenceCase()}
		</button>
	);
}
