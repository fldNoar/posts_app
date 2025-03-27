import About from "../react/pages/About";
import Posts from "../react/pages/Posts";
import Home from "../react/pages/Home";
import NotFound from "../react/pages/NotFound";
import PostIdPage from "../react/pages/PostIdPage";

export const routes = [
    {path: '/about', element: <About />, exact: true},
    {path: '/posts', element: <Posts />, exact: true},
    {path: '/posts/:id', element: <PostIdPage />, exact: true},
    {path: '/', element: <Home />, exact: true},
    {path: '*', element: <NotFound />, exact: true},
];