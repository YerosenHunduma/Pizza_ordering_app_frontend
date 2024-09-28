import RegisterFrom from '../components/auth/RegisterFrom';
import AuthPagesLeftSide from '../components/layout/AuthPagesLeftSide';

function SignUp() {
    return (
        <div className="flex flex-col min-h-screen md:flex-row ">
            <AuthPagesLeftSide />
            <RegisterFrom />
        </div>
    );
}
export default SignUp;
