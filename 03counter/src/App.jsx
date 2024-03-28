import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	function addValue() {
		// counter = counter + 1;
		setCounter(counter + 1);
		console.log("clicked: ", counter);
	}

	function removeValue() {
		setCounter(counter - 1);
		console.log("clicked: ", counter);
	}

	return (
		<>
			<h1>Chai aur React</h1>
			<h2>Counter value: {counter}</h2>

			<button onClick={addValue}>Add Value: {counter}</button>
			<br />
			<br />
			<button onClick={removeValue}>Subtract Value: {counter}</button>
		</>
	);
}

export default App;
