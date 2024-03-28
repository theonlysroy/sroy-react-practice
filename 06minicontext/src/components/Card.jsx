import React, { useContext } from "react";
import { UserContext } from "../contexts/index";

function Card() {
	const { user } = useContext(UserContext);
	console.log(user);
	if (user) {
		return (
			<div>
				<h4>Card: </h4>
				<p>Hello, {user.username}</p>
			</div>
		);
	} else {
		return (
			<div>
				<h4>Card: </h4>
				<p>Hello, Guest</p>
			</div>
		);
	}
}

export default Card;
