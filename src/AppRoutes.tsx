import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Order from './pages/Order';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Layout from './Layout';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};
