import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './screens/Home';
import About from './screens/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
