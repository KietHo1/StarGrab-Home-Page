import "./App.css";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";
import Body from "./UI/Body/Body";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
