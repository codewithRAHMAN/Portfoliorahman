import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
        }),
        onSubmit: (values) => {
            const { name, email, message } = values;

            // Create mailto link
            const mailtoLink = `mailto:mdfazal909@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
                name
            )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

            // Open mailto link
            window.location.href = mailtoLink;
        },
    });

    return (
        <div className="p-8 w-full bg-gray-100 min-h-screen flex justify-center items-center">

            <form
                onSubmit={formik.handleSubmit}
                className="w-full max-w-lg bg-white shadow-md rounded-lg p-6"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        {...formik.getFieldProps('name')}
                        className={`mt-1 p-2 block w-full rounded-md border ${formik.touched.name && formik.errors.name
                            ? 'border-red-500'
                            : 'border-gray-300'
                            }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-500 text-sm">{formik.errors.name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        {...formik.getFieldProps('email')}
                        className={`mt-1 p-2 block w-full rounded-md border ${formik.touched.email && formik.errors.email
                            ? 'border-red-500'
                            : 'border-gray-300'
                            }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        {...formik.getFieldProps('message')}
                        className={`mt-1 p-2 block w-full rounded-md border ${formik.touched.message && formik.errors.message
                            ? 'border-red-500'
                            : 'border-gray-300'
                            }`}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-red-500 text-sm">{formik.errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default ContactForm;
