import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Manga from "./pages/Manga.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<Manga />} />
      </Routes>
    </BrowserRouter>
  );
}
