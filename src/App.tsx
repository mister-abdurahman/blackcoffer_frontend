import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./UI/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { GraphVisuals } from "./pages/GraphVisuals";
import { ChartVisuals } from "./pages/ChartVisuals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/graphs" element={<GraphVisuals />}></Route>
          <Route path="/charts" element={<ChartVisuals />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
