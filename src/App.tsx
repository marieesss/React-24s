import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './screens/Home';
import About from './screens/About';
import { ChartProvider } from './utils/context/chartContext';


function App() {
  return (
    <ChartProvider>
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
    </ChartProvider>
  );
}

export default App;
