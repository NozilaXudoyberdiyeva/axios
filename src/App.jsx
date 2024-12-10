import { Route, Routes } from "react-router-dom";
import { NavbarDefault } from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Films from "./pages/Films";
import Update from "./pages/Update.jsx";

const App = () => {
  return (
    <div>
      <NavbarDefault />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
