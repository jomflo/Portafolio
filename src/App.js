import "./App.css";
import { NavBar } from "./components/NavBar";
import { RoutesApp } from "./components/RoutesApp";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contenedor">
        <RoutesApp />
      </div>
        <Footer />
    </div>
  );
}

export default App;
