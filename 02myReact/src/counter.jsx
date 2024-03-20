import { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	function addValueHandler() {
		setCounter(counter + 1);
	}

	function minusValueHandler() {
		setCounter(counter - 1);
	}

	return (
		<>
			<h1>Counter App: {counter}</h1>
			<br />
			<br />
			<button onClick={addValueHandler}>Add Value</button>
			<br />
			<br />
			<button onClick={minusValueHandler}>Minus Value</button>
		</>
	);
}
