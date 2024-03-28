import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

function App() {
	const [password, setpassword] = useState("");
	const [length, setlength] = useState(0);
	const [numberAllowed, setnumberAllowed] = useState(false);
	const [charsAllowed, setcharsAllowed] = useState(false);

	const passwordRef = useRef(null);

	// generate password
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "0123456789";
		if (charsAllowed) str += "@#$%^&*()_-<>";

		for (let i = 1; i <= length; i++) {
			// generate random numbers for index value
			let idx = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(idx);
		}
		setpassword(pass);
	}, [length, numberAllowed, charsAllowed, setpassword]);

	function handleRefresh() {
		passwordGenerator();
	}

	const copyToClipboard = useCallback(() => {
		passwordRef.current.value
			? passwordRef.current.select()
			: alert("nothing to copy");
		passwordRef.current?.setSelectionRange(0, 18);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charsAllowed, passwordGenerator]);

	return (
		<div className="bg-gray-950 text-white w-full min-h-screen flex flex-col flex-wrap justify-center items-center">
			<h1 className="text-4xl font-bold">Password Generator</h1>

			{/* password field with options */}
			<div className="bg-zinc-700 rounded-lg my-4 w-[400px] p-4 flex flex-wrap gap-y-4">
				<input
					type="text"
					className="flex-grow rounded-l-md p-2 outline-none text-black"
					placeholder="Password"
					value={password}
					readOnly
					ref={passwordRef}
				/>
				<button
					className="outline-none rounded-r-md px-4 py-1 text-lg bg-blue-600 font-semibold"
					onClick={copyToClipboard}
				>
					copy
				</button>
				<button className="outline-none text-3xl" onClick={handleRefresh}>
					🔃
				</button>

				{/* constraints */}
				<div className="flex gap-x-2 flex-wrap">
					<div className="flex justify-center gap-1">
						<input
							type="range"
							min={6}
							max={20}
							value={length}
							onChange={(e) => {
								setlength(e.target.value);
							}}
						/>
						<label>Length ({length})</label>
					</div>
					<div className="flex justify-center gap-1">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							onChange={() => {
								setnumberAllowed((prev) => !prev);
							}}
						/>
						<label>Numbers</label>
					</div>
					<div className="flex justify-center gap-1">
						<input
							type="checkbox"
							defaultChecked={charsAllowed}
							onChange={() => {
								setcharsAllowed((prev) => !prev);
							}}
						/>
						<label>Characters</label>
					</div>
				</div>
			</div>

			{/* footer and creator name */}
			<div className="fixed bottom-2 w-fit text-orange-400 text-sm">
				Created by Swagatam Roy @ 28th March, 2024
			</div>
		</div>
	);
}

export default App;
