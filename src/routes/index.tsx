import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@/layouts';

const Home = lazy(() => import('@/views/Home'));
const Button = lazy(() => import('@/views/Button'));
const Link = lazy(() => import('@/views/Link'));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/link" element={<Link />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
