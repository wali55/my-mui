import './App.css';
import Home from './pages/Home';
import Tour from './pages/Tour';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';


function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
