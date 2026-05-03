'use client';
import { useForm, SubmitHandler } from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';


const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleloginFunc = async (data) => {
        console.log(data);
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error('Login Failed');
            return;
        }

        if (res) {
            toast.success("Login successful!");
         
        }
    }
    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to your account
                </p>

                <form className="space-y-5" onSubmit={handleSubmit(handleloginFunc)}>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email field is required" })}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "password field is required" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                        />
                        <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}> {isShowPassword ? <FaEye /> : <LuEyeClosed />}</span>
                        {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Do not have an account?{" "}
                    <Link href="/register" className="text-blue-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default LoginPage;