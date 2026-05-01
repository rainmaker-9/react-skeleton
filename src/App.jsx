import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={route.element}
            index={route.isIndex}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
