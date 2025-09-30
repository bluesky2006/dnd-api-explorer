import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SpellsPage from "./components/SpellsPage";
import MonstersPage from "./components/MonstersPage";
import Home from "./components/Home";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/monsters" element={<MonstersPage />} />
      </Routes>
    </main>
  );
}

export default App;
