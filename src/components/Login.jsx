import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import AuthCardLayout from '../components/AuthCardLayout';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Min 8 characters').required('Password is required')
    });

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema,
        onSubmit: (values) => {
            setIsLoading(true);
            const savedEmail = localStorage.getItem('authEmail');
            const savedPassword = localStorage.getItem('authPassword');

            setTimeout(() => {
                if (values.email === savedEmail && values.password === savedPassword) {
                    navigate('/home');
                } else {
                    alert('Invalid credentials');
                }
                setIsLoading(false);
            }, 1000);
        }
    });

    return (
        <AuthCardLayout
            title="Welcome Back"
            subtitle="Please enter your credentials"
            footer={
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <button onClick={() => navigate('/')} className="text-blue-500 hover:underline">Sign up</button>
                </p>
            }
        >
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                />
                <div className="flex justify-center">
                    <SubmitButton isLoading={isLoading} disabled={!formik.isValid} text="Log in" />
                </div>
            </form>
        </AuthCardLayout>
    );
};

export default Login;
