import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import { BaseLayout } from '@/layouts';

const Home = lazy(() => import('@/views/Home'));
const Button = lazy(() => import('@/views/Button'));
const Checkbox = lazy(() => import('@/views/Checkbox'));
const Collapse = lazy(() => import('@/views/Collapse'));
const DatePicker = lazy(() => import('@/views/DatePicker'));
const Drawer = lazy(() => import('@/views/Drawer'));
const Dropdown = lazy(() => import('@/views/Dropdown'));
const Form = lazy(() => import('@/views/Form'));
const Input = lazy(() => import('@/views/Input'));
const Link = lazy(() => import('@/views/Link'));
const Loading = lazy(() => import('@/views/Loading'));
const Message = lazy(() => import('@/views/Message'));
const Modal = lazy(() => import('@/views/Modal'));
const Pagination = lazy(() => import('@/views/Pagination'));
const Popover = lazy(() => import('@/views/Popover'));
const Radio = lazy(() => import('@/views/Radio'));
const Select = lazy(() => import('@/views/Select'));
const Skeleton = lazy(() => import('@/views/Skeleton'));
const Slider = lazy(() => import('@/views/Slider'));
const Steps = lazy(() => import('@/views/Steps'));
const Swiper = lazy(() => import('@/views/Swiper'));
const Switch = lazy(() => import('@/views/Switch'));
const Table = lazy(() => import('@/views/Table'));
const Tabs = lazy(() => import('@/views/Tabs'));
const TagInput = lazy(() => import('@/views/TagInput'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/collapse" element={<Collapse />} />
          <Route path="/datepicker" element={<DatePicker />} />
          <Route path="/drawer" element={<Drawer />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/form" element={<Form />} />
          <Route path="/input" element={<Input />} />
          <Route path="/link" element={<Link />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/message" element={<Message />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/popover" element={<Popover />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/select" element={<Select />} />
          <Route path="/skeleton" element={<Skeleton />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/swiper" element={<Swiper />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/table" element={<Table />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/taginput" element={<TagInput />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
