import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
