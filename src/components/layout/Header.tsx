import { Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import pizzaImg from '../../assets/emojione_pizza.png';

function Header() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    return (
        <header className=" bg-[#FFF8F1] flex justify-between w-full py-4 px-5">
            <div className="flex items-center justify-between gap-3">
                <img src={pizzaImg} alt="Pizza" className="w-[50px] h-[50px]" />
                <h5 className="text-[24px] font-bold text-center text-[#AF5901]">Pizza</h5>
            </div>
            <nav className="min-w-96 flex items-center justify-between  text-lg font-medium">
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    color="orange"
                    sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', letterSpacing: '3%', color: isActive('/') ? '#FF890F' : '#16120DBF' }}
                >
                    Home
                </Typography>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/order"
                    sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', letterSpacing: '3%', color: isActive('/order') ? '#FF890F' : '#16120DBF' }}
                >
                    Orders
                </Typography>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/about"
                    sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', letterSpacing: '3%', color: isActive('/about') ? '#FF890F' : '#16120DBF' }}
                >
                    Who We Are
                </Typography>
            </nav>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#FF890F',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#FF962C'
                    },
                    padding: '10px 30px',
                    fontFamily: 'Inter',
                    letterSpacing: '2%'
                }}
            >
                Register
            </Button>
        </header>
    );
}

export default Header;
