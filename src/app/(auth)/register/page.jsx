'use client';
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleRegisterFunc = async (data) => {
        console.log(data);
        const { email, name, photo, password } = data;
        console.log(name);

        const {data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error, 'password length', password.length);

        if(error){
            toast.error(error.message)
        }
        if(res){
            toast.success("Registration Successful")
        }
    }
    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Register to get started
                </p>

                <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-2 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        {errors.email && (
                            <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            {...register("photo")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        {/* {errors.photo && (
                            <p className="text-red-500 mt-2 text-sm">{errors.photo.message}</p>
                        )} */}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}> {isShowPassword? <FaEye /> : <LuEyeClosed /> }</span>
                        {errors.password && (
                            <p className="text-red-500 mt-2 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Register
                    </button>
                </form>

            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;