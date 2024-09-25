import { Footer } from "./components/Footer";
import { Wrapper } from "./components/Wrapper";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/:anchor?" element={<Home />} />
          <Route path="article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
