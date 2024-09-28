import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import pizzaImg from '../../assets/emojione_pizza.png';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { ErrorResponse, useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../redux/Features/authApiSlice';
import { registrationSchema } from '../../validation/Registarwtion';
import { extractValidationErrors } from '../../helper/RegistarationValidation';
import { serverSuccessResponse } from '../../redux/Features/type';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [location, setLocation] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string | null }>({});

    const navigate = useNavigate();

    const [registration, { isLoading }] = useRegistrationMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const validation = registrationSchema.safeParse({
            email,
            password,
            confirm_password,
            location,
            phone_number,
            acceptTerms
        });

        if (!validation.success) {
            const validationErrors = extractValidationErrors(validation.error);
            setFormErrors(validationErrors);
            return;
        }

        try {
            const res = await registration({
                email,
                password,
                confirm_password,
                location,
                phone_number
            });

            if ('data' in res) {
                const { data } = res as { data: serverSuccessResponse };
                toast.success(data.message);
                navigate('/login');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen md:w-1/2 px-4 my-20">
            <div className="w-[363px] sm:w-[552px] max-w-md h-auto">
                <div className="flex w-[133px] h-[50px] mb-6 items-center justify-between">
                    <img src={pizzaImg} alt="Pizza" className="w-[50px] h-[50px]" />
                    <h5 className="text-[24px] font-bold text-center text-[#AF5901]">Pizza</h5>
                </div>
                <h5 className="text-2xl font-bold mb-4 py-4 text-left">Register</h5>
                <form onSubmit={handleSubmit}>
                    <div className="my-4">
                        <TextField
                            label="Email address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div className="my-4">
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div className="my-4">
                        <TextField
                            label="Confirm Password"
                            type="password"
                            value={confirm_password}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!formErrors.confirmPassword}
                            helperText={formErrors.confirmPassword}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div className="my-4">
                        <TextField
                            label="Location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            error={!!formErrors.location}
                            helperText={formErrors.location}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div className="my-4">
                        <TextField
                            label="Phone Number"
                            type="text"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            error={!!formErrors.phoneNumber}
                            helperText={formErrors.phoneNumber}
                            fullWidth
                            variant="outlined"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-4">
                            <FormControlLabel control={<Checkbox checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />} required label="I accept the Terms and policy" />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
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
                        {isLoading ? 'REGISTERING...' : 'REGISTER'}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
