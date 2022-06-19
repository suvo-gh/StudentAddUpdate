import React from 'react';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import {} from 'react-router';
import Home from './containers/Home';
import AddStudent from './containers/AddStudent'

import { createBrowserHistory } from 'history';
// import MyComponent

const history = createBrowserHistory();

const Router = () => {
    return (
        <>
        <BrowserRouter history={history} >
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/add'} element={<AddStudent/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default Router;
