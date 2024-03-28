/* function myRenderer(reactEl, container) {
	const domEl = document.createElement(reactEl.type);
	domEl.innerHTML = reactEl.children;
	domEl.setAttribute("href", reactEl.props.href);
	domEl.setAttribute("target", reactEl.props.target);

	container.appendChild(domEl);
} */

function myRenderer(reactEl, container) {
	const domEl = document.createElement(reactEl.type);
	domEl.innerHTML = reactEl.children;

	for (const prop in reactEl.props) {
		if (prop === "children") continue;
		domEl.setAttribute(prop, reactEl.props.prop);
	}
	container.appendChild(domEl);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://github.com",
		target: "_blank",
	},
	children: "Go to github",
};

const myroot = document.getElementById("root");

myRenderer(reactElement, myroot);
