import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const About = lazy(() => import('@/views/About'));
const Button = lazy(() => import('@/views/Button'));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="button" element={<Button />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
