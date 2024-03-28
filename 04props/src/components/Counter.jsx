import React, { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	function addValue() {
		setCounter((prev) => prev + 1);
		setCounter((prev) => prev + 1);
		setCounter((prev) => prev + 1);
	}

	function minusValue() {
		setCounter((prev) => prev - 1);
		setCounter((prev) => prev - 1);
		setCounter((prev) => prev - 1);
	}

	return (
		<div>
			<h1>Counter Interview Problem</h1>
			<h3>Counter: {counter}</h3>
			<button onClick={addValue}>+</button>{" "}
			<button onClick={minusValue}>-</button>
			<p>footer: {counter}</p>
		</div>
	);
}
