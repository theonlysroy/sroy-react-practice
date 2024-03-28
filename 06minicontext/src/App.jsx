import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Card from "./components/Card";

function App() {
	return (
		<UserContextProvider>
			<h1>Hello React</h1>
			<Login />
			<Dashboard />
			<Card />
		</UserContextProvider>
	);
}

export default App;
