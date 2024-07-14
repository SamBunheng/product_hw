import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectUser } from '../redux/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const { t } = useTranslation();
    const userResponse = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userResponse?.accessToken) {
            navigate('/');
        }
    }, [userResponse, navigate]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(t('login.email_invalid'))
                .required(t('login.email_required')),
            password: Yup.string()
                .min(8, t('login.password_min'))
                .required(t('login.password_required')),
        }),
        onSubmit: async (values) => {
            try {
                const resultAction = await dispatch(fetchLogin(values));
                if (fetchLogin.fulfilled.match(resultAction)) {
                    formik.resetForm();
                } else {
                    setError(resultAction.payload || resultAction.error.message);
                }
            } catch (error) {
                setError(error.message);
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">{t('login.title')}</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('login.email')}</label>
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="w-full px-3 py-2 border rounded"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('login.password')}</label>
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="w-full px-3 py-2 border rounded"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        {t('login.login_button')}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/register" className="text-blue-500">
                        {t('register')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
