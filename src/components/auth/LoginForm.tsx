import { TextField, Button, FormControlLabel, Checkbox, Divider } from '@mui/material';
import pizzaImg from '../../assets/emojione_pizza.png';
import { useLoginMutation } from '../../redux/Features/authApiSlice';
import { FormEvent, useState } from 'react';
import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setCredentials } from '../../redux/Features/authSlice';
import { userProps } from '../../redux/Features/type';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await login({ email, password });
            console.log(res);
            if ('data' in res) {
                const { data } = res as { data: userProps };
                toast.success('Signed in successfully');
                console.log(data);
                dispatch(setCredentials(data));
                navigate('/');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen md:w-1/2 px-4 ">
            <div className="w-[363px] sm:w-[552px] max-w-md h-auto">
                <div className="flex w-[133px] h-[50px] mb-6 items-center justify-between">
                    <img src={pizzaImg} alt="Pizza" className="w-[50px] h-[50px]" />
                    <h5 className="text-[24px] font-bold text-center text-[#AF5901]">Pizza</h5>
                </div>
                <h5 className="text-2xl font-bold  py-4 text-left">Login</h5>
                <Divider className=" md:hidden" />
                <form onSubmit={handleSubmit}>
                    <div className="my-4">
                        <TextField label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth variant="outlined" />
                    </div>
                    <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth variant="outlined" />
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-4">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#FF8100',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#FF962C'
                            },
                            padding: '8px'
                        }}
                    >
                        {isLoading ? 'LOGGING IN...' : 'LOGIN'}
                    </Button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm">
                        Haven't an account?
                        <Link to="/signup" className="text-[#FF9921]">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
