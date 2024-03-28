import React, { useContext, useState, useSyncExternalStore } from "react";
import { UserContext } from "../contexts";

function Login() {
	const [username, setUsername] = useState("");
	const [useremail, setUseremail] = useState("");

	const { setUser } = useContext(UserContext);

	function handleSubmit(e) {
		// e.preventDefault();
		setUser({ username, useremail });
	}

	return (
		<div>
			<h2>Login</h2>
			<div>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<br />
				<br />
				<input
					type="text"
					placeholder="user email"
					value={useremail}
					onChange={(e) => {
						setUseremail(e.target.value);
					}}
				/>
				<br />
				<br />
				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
}

export default Login;
