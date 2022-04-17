import logo from "./bookLook.png";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BooksList from "./components/BooksList";

function App() {
	return (
		<div className="App">
			<img className="logo" alt="No logo" src={logo}></img>
			<SearchBar />
			<BooksList />
		</div>
	);
}

export default App;
