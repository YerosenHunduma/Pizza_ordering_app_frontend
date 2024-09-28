import LoginForm from '../components/auth/LoginForm';
import AuthPagesLeftSide from '../components/layout/AuthPagesLeftSide';

const LoginPage = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-h-screen">
            <AuthPagesLeftSide />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
