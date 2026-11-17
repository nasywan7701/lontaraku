import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import { HomePage } from './pages/HomePage';
import { AksaraPage } from './pages/AksaraPage';
import { KosakataPage } from './pages/KosakataPage';
import { BacaanPage } from './pages/BacaanPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aksara" element={<AksaraPage />} />
          <Route path="kosakata" element={<KosakataPage />} />
          <Route path="bacaan" element={<BacaanPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
