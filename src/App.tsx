import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { DashboardPage } from "@/pages/dashboard";
import { TodosPage } from "@/pages/todos";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

