import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from 'pages/Home';
import Modal from 'pages/Modal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {background && <Route path="modal" element={<Modal />} />} */}
        <Route path="modal/:id" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
