import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;