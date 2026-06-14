import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="font-sans">
      <Toaster position="top-center" richColors theme="light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
