import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/layout';
import { useAuth } from '../context/AuthContext';
import Auth from './Auth';
import Home from './Home';
import CreateDealer from './CreateDealer';
import NotFound from './404';

export default function Pages() {
  const { isLogedIn } = useAuth();
  return (
    <>
      {isLogedIn ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<CreateDealer />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="/*" element={<Auth />} />
        </Routes>
      )}
    </>
  );
}
