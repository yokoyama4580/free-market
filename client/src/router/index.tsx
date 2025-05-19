import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/MyPage';
import Cart from '../pages/Cart';
import Login from '../pages/Login';

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/mypage",
        element: <MyPage />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/login",
        element: <Login />
    }
];

export default routes;