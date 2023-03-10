import "app.scss";
import Header from "components/header";
import Home from "pages/home";
import SearchResult from "pages/search-result";
import ErrorPage from "pages/error-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Routing */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app__container-header">
          <Header></Header>
        </div>
        <div className="app__container-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchResult />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
