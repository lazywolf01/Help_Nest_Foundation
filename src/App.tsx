import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  // Use relative paths - should work in both environments
  const basename = window.location.pathname.includes('/Help_Nest_Foundation') ? '/Help_Nest_Foundation' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
