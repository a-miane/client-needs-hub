import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NeedsList from "./pages/NeedsList";
import NewNeed from "./pages/NewNeed";
import NeedDetail from "./pages/NeedDetail";
import Administration from "./pages/Administration";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/needs" element={<NeedsList />} />
            <Route path="/needs/new" element={<NewNeed />} />
            <Route path="/needs/:id" element={<NeedDetail />} />
            <Route path="/administration" element={<Administration />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;