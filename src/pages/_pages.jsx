import { Route, Routes } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import CreateDealer from './CreateDealer';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create" element={<CreateDealer />} />
    </Routes>
  );
}

export default Pages;
