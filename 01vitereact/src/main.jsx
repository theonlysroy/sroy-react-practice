import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
	return (
		<div>
			<h1>Custom App !!</h1>
		</div>
	);
}

const reactEl = {
	type: "a",
	props: {
		href: "https://github.com",
		target: "_blank",
	},
	children: "Go to Github page",
};

// const linkElement = (
// 	<a href="https://github.com" target="_blank">
// 		Go to Github page
// 	</a>
// );

ReactDOM.createRoot(document.getElementById("sroy")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("sroy")).render(linkElement);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App/>
);
*/
