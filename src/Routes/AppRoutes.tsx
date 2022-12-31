import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-details/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default AppRoutes;