import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '@/pages/welcome';
import Dashboard from '@/pages/dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;