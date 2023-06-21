import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import All from 'pages/All';
import Active from 'pages/Active';
import Completed from 'pages/Completed';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="All" element={<All />} />
        <Route path="Active" element={<Active />} />
        <Route path="Completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
