import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home.jsx";
import New from "./page/New.jsx";
import Popular from "./page/Popular.jsx";
import Sports from "./page/Sports.jsx";
import Guide from "./page/Guide.jsx";
import List from "./page/List.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

