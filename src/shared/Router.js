import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import All from 'pages/All';
import Active from 'pages/Active';
import Completed from 'pages/Completed';
// import Modal from 'pages/Modal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* {background && <Route path="modal" element={<Modal />} />} */}
        </Route>
        <Route path="All" element={<All />} />
        <Route path="Active" element={<Active />} />
        <Route path="Completed" element={<Completed />} />
        <Route path="/detail" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
