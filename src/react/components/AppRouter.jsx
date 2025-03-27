import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../../constants/settings";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;