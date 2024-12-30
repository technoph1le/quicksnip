import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage.tsx";
import SearchPage from "./pages/SearchPage.tsx";

const App = () => {
  return (
    <div className="container flow">
      <Header />
      <Banner />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
