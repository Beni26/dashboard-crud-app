import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@/components/items/theme-provider';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
