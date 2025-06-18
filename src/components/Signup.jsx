import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import AuthCardLayout from '../components/AuthCardLayout';

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Min 8 characters').required('Password is required')
    });

    const formik = useFormik({
        initialValues: { username: '', email: '', password: '' },
        validationSchema,
        onSubmit: (values) => {
            setIsLoading(true);
            localStorage.setItem('authUsername', values.username);
            localStorage.setItem('authEmail', values.email);
            localStorage.setItem('authPassword', values.password);
            setTimeout(() => {
                setIsLoading(false);
                navigate('/login');
            }, 1000);
        }
    });

    return (
        <AuthCardLayout
            title="Create Account"
            subtitle="Enter your details to sign up"
            footer={
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline">Log in</button>
                </p>
            }
        >
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <InputField
                    id="username"
                    label="Username"
                    placeholder="JohnDoe"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.username}
                    touched={formik.touched.username}
                />
                <InputField
                    id="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                />
                <InputField
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />
                <div className="flex justify-center">
                    <SubmitButton isLoading={isLoading} disabled={!formik.isValid} text="Create Account" />
                </div>
            </form>
        </AuthCardLayout>
    );
};

export default Signup;



