import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import MyPage from '@/pages/MyPage';
import MainLayout from '@/shared/layout/MainLayout';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
