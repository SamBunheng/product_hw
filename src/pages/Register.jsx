import React, { useEffect } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateUser, selectUser, selectError } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const userResponse = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userResponse?.status === 201) {
      navigate("/verify-email");
    }
  }, [userResponse?.status, navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "123123123",
      confirmPassword: "123123123",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, t('login.username_too_short'))
        .max(15, t('login.username_too_long'))
        .required(t('login.username_required')),
      email: Yup.string()
        .email(t('login.invalid_email'))
        .required(t('login.email_required')),
      password: Yup.string()
        .min(8, t('login.password_too_short'))
        .required(t('login.password_required')),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], t('login.passwords_must_match'))
        .required(t('login.confirm_password_required')),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(fetchCreateUser(values));
      localStorage.setItem('email', values.email);
      resetForm();
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        {error && (
          <Alert color="failure" icon={HiInformationCircle}>
            {error.message || t('login.error_occurred')}
          </Alert>
        )}
        <h1 className="text-2xl font-bold mb-4">{t('register')}</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            {t('login.username')}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={`mt-1 block w-full p-2 border ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : "border-gray-300"
            } rounded`}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 text-sm">{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            {t('login.email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`mt-1 block w-full p-2 border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            {t('login.password')}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`mt-1 block w-full p-2 border ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            } rounded`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            {t('login.confirm_password')}
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={`mt-1 block w-full p-2 border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            } rounded`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {t('register')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
