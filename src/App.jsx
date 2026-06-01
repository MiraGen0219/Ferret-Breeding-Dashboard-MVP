import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Ferrets from "./pages/Ferrets";
import Pairings from "./pages/Pairings";
import Litters from "./pages/Litters";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/ferrets" element={<Ferrets />} />

        <Route path="/pairings" element={<Pairings />} />

        <Route path="/litters" element={<Litters />} />
      </Routes>
    </div>
  );
}

export default App;