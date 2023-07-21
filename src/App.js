import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import "./styles/CustomFont.css";





function App() {



  return (
    <Router>
      <div>

        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="/portfolio"
          element={
            <PortfolioPage />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage />
          }
        />
      </div>

    </Router>
  );
}

export default App;
