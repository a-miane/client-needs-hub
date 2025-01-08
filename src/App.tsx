import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NeedsList from "./pages/NeedsList";
import NewNeed from "./pages/NewNeed";
import NeedDetail from "./pages/NeedDetail";
import Administration from "./pages/Administration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/needs" element={<NeedsList />} />
      <Route path="/needs/new" element={<NewNeed />} />
      <Route path="/needs/:id" element={<NeedDetail />} />
      <Route path="/administration" element={<Administration />} />
    </Routes>
  );
}

export default App;