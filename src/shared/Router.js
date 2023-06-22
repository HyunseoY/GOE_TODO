import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
// import Modal from 'pages/Modal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* {background && <Route path="modal" element={<Modal />} />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
