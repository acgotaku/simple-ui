import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@/layouts';

const Home = lazy(() => import('@/views/Home'));
const Checkbox = lazy(() => import('@/views/Checkbox'));
const Button = lazy(() => import('@/views/Button'));
const Input = lazy(() => import('@/views/Input'));
const Link = lazy(() => import('@/views/Link'));
const Message = lazy(() => import('@/views/Message'));
const Modal = lazy(() => import('@/views/Modal'));
const Radio = lazy(() => import('@/views/Radio'));
const Switch = lazy(() => import('@/views/Switch'));
const Tabs = lazy(() => import('@/views/Tabs'));

const AppRoutes = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/input" element={<Input />} />
          <Route path="/link" element={<Link />} />
          <Route path="/message" element={<Message />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/tabs" element={<Tabs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
